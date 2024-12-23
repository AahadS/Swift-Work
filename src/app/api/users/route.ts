import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello' }, { status: 200 });
}

export async function POST(request: Request) {
  const body = await request.json();

  try {
    return NextResponse.json({
      message: 'Received data',
      data: body,
    });
  } catch {
    return NextResponse.json({
      error: 'Error processing request',
    }, { status: 400 });
  }
}
