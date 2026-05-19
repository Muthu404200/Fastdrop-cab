import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

export default function QuickContact() {
  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="tel:+919566197139"
            className="flex items-center p-4 bg-muted/30 hover:bg-muted border border-border rounded-2xl transition-all group"
          >
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h4 className="text-foreground font-bold text-lg">
                Call Now
              </h4>
              <p className="text-muted-foreground text-sm">Instant booking</p>
            </div>
          </a>

          <a
            href="https://wa.me/+919566197139"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-2xl transition-all group"
          >
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,193,7,0.4)]">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h4 className="text-foreground font-bold text-lg">WhatsApp Chat</h4>
              <p className="text-muted-foreground text-sm">Quick response</p>
            </div>
          </a>

          <a
            href="tel:+917010414951"
            className="flex items-center p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-2xl transition-all group"
          >
            <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h4 className="text-foreground font-bold text-lg">Emergency Booking</h4>
              <p className="text-muted-foreground text-sm">24/7 priority rides</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
