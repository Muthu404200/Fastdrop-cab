import { Clock, DollarSign, HeadphonesIcon, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "On Time Guarantee",
    description: "We value your time. Our drivers arrive at your location exactly when you need them.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "Affordable Pricing",
    description: "No hidden charges or surge pricing. Get transparent and competitive fares.",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-primary" />,
    title: "24/7 Support",
    description: "Need help? Our dedicated support team is available round the clock.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Safe & Verified Drivers",
    description: "Your safety is our priority. All drivers undergo strict background checks.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">FastDrop Cab?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a premium taxi service that focuses on reliability, comfort, and affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
