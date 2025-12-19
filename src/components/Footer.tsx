import { Coffee, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">Sippable</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium coffee vending solutions for modern spaces. We deliver exceptional beverage experiences with zero hassle and zero investment.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <span>info@sippable.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <span>1-800-SIPPABLE</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Nationwide Service</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('machines')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition">
                  Our Machines
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('venues')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition">
                  Venues
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition">
                  Benefits
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-amber-500 transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Installation</li>
              <li>Maintenance</li>
              <li>Daily Restocking</li>
              <li>24/7 Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sippable. All rights reserved. Premium coffee vending solutions.</p>
        </div>
      </div>
    </footer>
  );
}