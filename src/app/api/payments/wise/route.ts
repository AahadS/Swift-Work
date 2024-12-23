import { NextResponse } from 'next/server';

const WISE_API_URL = process.env.WISE_SANDBOX === 'true'
  ? 'https://api.sandbox.wise.com'
  : 'https://api.wise.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, description } = body;

    // Create quote
    const quoteResponse = await fetch(`${WISE_API_URL}/v3/quotes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WISE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sourceCurrency: 'USD',
        targetCurrency: 'USD',
        sourceAmount: amount,
        profile: process.env.WISE_PROFILE_ID,
      }),
    });

    const quote = await quoteResponse.json();

    // Create recipient
    const recipientResponse = await fetch(`${WISE_API_URL}/v1/accounts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WISE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'USD',
        type: 'business',
        profile: process.env.WISE_PROFILE_ID,
        accountHolderName: 'Your Company Name',
        // Add other recipient details as needed
      }),
    });

    const recipient = await recipientResponse.json();

    // Create transfer
    const transferResponse = await fetch(`${WISE_API_URL}/v1/transfers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WISE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        targetAccount: recipient.id,
        quoteUuid: quote.id,
        customerTransactionId: `ORDER-${Date.now()}`,
        details: {
          reference: description,
          transferPurpose: 'service_payment',
        },
      }),
    });

    const transfer = await transferResponse.json();

    return NextResponse.json({ success: true, transfer });
  } catch (error) {
    console.error('Payment error:', error);
    return NextResponse.json(
      { success: false, error: 'Payment processing failed' },
      { status: 500 },
    );
  }
}
