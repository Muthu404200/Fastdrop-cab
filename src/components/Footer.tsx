import { MapPin, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-foreground">
                Fast<span className="text-primary">Drop</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Fast, safe, and reliable taxi service right at your fingertips. No complex apps, just simple booking via WhatsApp.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+1234567890" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 mr-3" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  WhatsApp Chat
                </a>
              </li>
              <li className="flex items-start text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 shrink-0" />
                <span>123 Taxi Rank, Business District, City 10001</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FastDrop Cab. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            Built for speed and simplicity.
          </div>
        </div>
      </div>
    </footer>
  );
}
