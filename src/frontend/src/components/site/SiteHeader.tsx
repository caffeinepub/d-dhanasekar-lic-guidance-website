import { Link } from '@tanstack/react-router';
import { Shield } from 'lucide-react';
import { useIsCallerAdmin } from '../../hooks/useQueries';

export default function SiteHeader() {
  const { data: isAdmin } = useIsCallerAdmin();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-lic-primary" />
            <div>
              <div className="text-xl font-bold text-lic-primary">LIC Villupuram</div>
              <div className="text-xs text-lic-text/70">D. Dhanasekar</div>
            </div>
          </Link>
        </div>
        <nav className="border-t border-gray-100 py-3">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <li>
              <Link
                to="/"
                className="text-lic-text transition-colors hover:text-lic-primary [&.active]:text-lic-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lic-text transition-colors hover:text-lic-primary [&.active]:text-lic-primary"
              >
                About LIC
              </Link>
            </li>
            <li>
              <Link
                to="/policies"
                className="text-lic-text transition-colors hover:text-lic-primary [&.active]:text-lic-primary"
              >
                Policy Details
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lic-text transition-colors hover:text-lic-primary [&.active]:text-lic-primary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/join-agent"
                className="text-lic-text transition-colors hover:text-lic-primary [&.active]:text-lic-primary"
              >
                Join as LIC Agent
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lic-text transition-colors hover:text-lic-primary [&.active]:text-lic-primary"
              >
                Contact
              </Link>
            </li>
            {isAdmin && (
              <li>
                <Link
                  to="/admin"
                  className="rounded-full bg-lic-primary px-4 py-1 text-white transition-colors hover:bg-lic-primary/90 [&.active]:bg-lic-primary/90"
                >
                  Admin
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
