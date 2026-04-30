import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-primary/20 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-background/80 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-[0_0_50px_rgba(255,193,7,0.15)]">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            Need a Ride <span className="text-primary">Now?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Skip the app downloads and complicated sign-ups. Book your taxi instantly via WhatsApp and get moving in minutes.
          </p>
          
          <a
            href="https://wa.me/1234567890?text=I%20need%20a%20ride%20now!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-5 rounded-full font-bold text-lg md:text-xl hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(255,193,7,0.5)] hover:shadow-[0_0_40px_rgba(255,193,7,0.7)] hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
