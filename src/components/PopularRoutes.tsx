import { Plane, Map, Building2 } from "lucide-react";

const services = [
  {
    icon: <Plane className="w-10 h-10 text-primary" />,
    title: "Airport Drop",
    description: "Hassle-free airport transfers. We ensure you never miss a flight with our prompt service.",
  },
  {
    icon: <Map className="w-10 h-10 text-primary" />,
    title: "Outstation Trips",
    description: "Planning a weekend getaway? Book our comfortable outstation cabs for a smooth journey.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-primary" />,
    title: "Local City Ride",
    description: "Beat the city traffic. Quick and safe local point-to-point drop services.",
  },
];

export default function PopularRoutes() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Popular <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you need a quick ride across town or a long distance journey, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-muted/30 border border-border p-8 rounded-3xl hover:bg-muted/50 transition-colors relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
              
              <div className="relative z-10">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <a
                  href="https://wa.me/1234567890?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors"
                >
                  Book Service →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
