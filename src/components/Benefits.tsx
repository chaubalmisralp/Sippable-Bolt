import { Wrench, Clock, DollarSign, Coffee } from 'lucide-react';

const benefits = [
  {
    icon: Wrench,
    title: '100% Turnkey Solution',
    description: 'We handle installation, daily restocking, regular cleaning, and maintenance. You don\'t lift a finger.',
    features: [
      'Professional installation by certified technicians',
      'Daily restocking of premium ingredients',
      'Regular deep cleaning and sanitization',
      'Preventive maintenance and repairs',
      'Real-time monitoring and support',
    ],
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Essential for early morning, mid-day, or mid-afternoon energy boosts without leaving the building or standing in cafe lines.',
    features: [
      'Always available when needed',
      'No waiting in long cafe lines',
      'Super-quick service between meetings',
      'Perfect for shift workers',
      'Weekend and holiday access',
    ],
  },
  {
    icon: DollarSign,
    title: 'Zero Capital Expenditure',
    description: 'We lease the footprint; you get the amenity value. No upfront costs, no equipment investment, just pure value.',
    features: [
      'No purchase or leasing fees',
      'No maintenance costs',
      'No staffing requirements',
      'Revenue sharing opportunities',
      'Enhanced property value',
    ],
  },
  {
    icon: Coffee,
    title: 'Multiple Delicious Options',
    description: 'More than 30 combinations of Coffee, Specialty Coffees, Hot Chocolate, Tea, Cappuccino & Espresso.',
    features: [
      'Freshly brewed coffee varieties',
      'Specialty espresso drinks',
      'Premium tea selections',
      'Hot chocolate and mochas',
      'Customizable strength and size',
    ],
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Sippable Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive turnkey service means you enjoy all the benefits with zero hassle, zero investment, and maximum convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 border border-amber-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>

                <div className="space-y-3 pl-18">
                  {benefit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-700 to-orange-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Elevate Your Property?
              </h3>
              <p className="text-amber-50 text-lg mb-6">
                Join the growing number of property managers who have discovered the Sippable difference. Our turnkey solution delivers premium coffee experiences with zero hassle.
              </p>
              <ul className="space-y-2 text-amber-50">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Free site assessment and consultation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Customized proposal within 48 hours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Installation within 2 weeks</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 font-bold text-lg transition shadow-lg hover:shadow-xl"
              >
                Get Your Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}