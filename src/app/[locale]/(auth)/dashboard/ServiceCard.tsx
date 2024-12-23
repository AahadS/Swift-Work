'use client';

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  href: string;
};

export default function ServiceCard({ title, description, features, buttonText, href }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="mb-4 line-clamp-1 text-gray-600">{description}</p>
      <ul className="mb-4 grow space-y-2">
        {Array.isArray(features) && features.map((feature: string) => (
          <li key={feature} className="flex items-center">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className="hover:bg-primary-dark mt-auto w-full rounded bg-primary px-4 py-2 text-white"
        onClick={() => window.location.href = href}
      >
        {buttonText}
      </button>
    </div>
  );
}
