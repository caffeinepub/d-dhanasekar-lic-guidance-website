import { Heart } from 'lucide-react';
import { getPhoneLink } from '../../lib/contactLinks';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'lic-guidance');

  return (
    <footer className="bg-lic-text py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2 text-white/80">
              <p className="font-medium">D. Dhanasekar</p>
              <p>LIC Development Officer</p>
              <p>Villupuram</p>
              <a href={getPhoneLink()} className="block hover:text-lic-accent">
                📞 9095077994
              </a>
            </div>
          </div>

          {/* Trust Message */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Commitment</h3>
            <p className="text-white/80">
              Providing trusted LIC guidance and personalized financial planning to secure your family's future with integrity and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2 text-white/80">
              <a href="/" className="block hover:text-lic-accent">
                Home
              </a>
              <a href="/about" className="block hover:text-lic-accent">
                About LIC
              </a>
              <a href="/policies" className="block hover:text-lic-accent">
                Policy Details
              </a>
              <a href="/join-agent" className="block hover:text-lic-accent">
                Join as LIC Agent
              </a>
              <a href="/contact" className="block hover:text-lic-accent">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          <p className="mb-2">
            © {currentYear} D. Dhanasekar LIC Guidance. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lic-accent"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
