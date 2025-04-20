import { Tilt } from "@/components/ui/tilt";
import {
  Component,
  Layout,
  Shield,
  ShoppingCart,
  SquareBottomDashedScissors,
} from "lucide-react";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: <Layout />,
    title: "Landing Pages",
    description:
      "Convert visitors into customers with modern, eye catchy designed for maximum impact.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading Speed"],
  },
  {
    id: 2,
    icon: <ShoppingCart />,
    title: "E-commerce Site",
    description:
      "Online store with custom features, payment integration, and user-friendly.",
    features: [
      "Secure Payment Gateway",
      "Inventory Management",
      "User-Friendly Interface",
    ],
  },
  {
    id: 3,
    icon: <SquareBottomDashedScissors />,
    title: "Redesign Website",
    description:
      "Tailoring existing wesbite following reference(es) to create a website.",
    features: ["Re-Design", "Desired Features", "Exact Reference"],
  },
  {
    id: 4,
    icon: <Component />,
    title: "WordPress Solutions",
    description:
      "Elementor page builder is used from scratch to fully functional website design and development.",
    features: [
      "Elemntor Page Builder",
      "Speed Optimization",
      "E-commerce site develop",
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col md:items-center space-y-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text transition-colors md:my-14">
        Professional Solutions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Tilt rotationFactor={8} isRevese key={service.id}>
            <div className="flex flex-col space-y-5 p-6 rounded-xl shadow-lg bg-white dark:bg-zinc-900">
              {service.icon}
              <h2 className="text-xl md:text-2xl font-semibold">
                {service.title}
              </h2>
              <p className="lg:text-lg text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Shield /> {service.features[0]}
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Shield /> {service.features[1]}
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <Shield /> {service.features[2]}
                </li>
              </ul>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
