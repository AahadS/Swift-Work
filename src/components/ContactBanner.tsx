'use client';

export default function ContactBanner() {
  return (
    <div className="rounded-lg bg-primary p-6 text-white">
      <h2 className="mb-3 text-xl font-semibold">Need Help?</h2>
      <p className="mb-4">Our team is here to assist you with any questions or concerns.</p>
      <button className="rounded bg-white px-4 py-2 text-primary hover:bg-gray-100">
        Contact Support
      </button>
    </div>
  );
}
