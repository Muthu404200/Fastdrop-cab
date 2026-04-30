import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul S.",
    role: "Regular Commuter",
    text: "FastDrop Cab is truly reliable. The driver arrived exactly on time and the car was spotless. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Business Traveler",
    text: "Booking via WhatsApp is so convenient. No need to download another app. The service is fast and drivers are professional.",
    rating: 5,
  },
  {
    name: "Vikram R.",
    role: "Tourist",
    text: "Used them for an outstation trip. Very reasonable pricing and a very smooth drive. Will definitely use again.",
    rating: 5,
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">Thousands</span>
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-foreground font-bold">4.9/5 Average Rating</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border border-border p-8 rounded-3xl"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 italic">"{testimonial.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center font-bold text-foreground">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
