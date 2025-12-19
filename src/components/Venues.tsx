import { Building2, Train, Bus, ShoppingBag, UtensilsCrossed } from 'lucide-react';

const venues = [
  {
    icon: Building2,
    title: 'Office Buildings',
    description: 'Boost employee satisfaction and productivity with premium coffee access without leaving the building.',
    benefits: ['No cafe lines', 'Instant energy boost', 'Cost-effective perk', 'Meeting room convenience'],
  },
  {
    icon: Train,
    title: 'Train Stations',
    description: 'Serve commuters in a rush with quick, quality coffee for their journey ahead.',
    benefits: ['Fast service', '24/7 availability', 'Consistent quality', 'Multiple locations'],
  },
  {
    icon: Bus,
    title: 'Bus Stops',
    description: 'Transform waiting time into quality time with accessible premium beverages.',
    benefits: ['Passenger comfort', 'Additional revenue', 'Low maintenance', 'Weather-proof'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopping Malls',
    description: 'Keep shoppers energized and engaged throughout their retail experience.',
    benefits: ['Extended shopping time', 'Foot traffic boost', 'Modern amenity', 'Multiple locations'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Courts',
    description: 'Complement food offerings with premium coffee and specialty beverages.',
    benefits: ['Higher ticket value', 'Quick turnover', 'Diverse options', 'Self-service'],
  },
];

export default function Venues() {
  return (
    <section id="venues" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfect for Every Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From bustling transit hubs to corporate offices, Sippable enhances any venue with premium beverage solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => {
            const Icon = venue.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">{venue.title}</h3>
                <p className="text-gray-600 mb-6">{venue.description}</p>

                <div className="space-y-3">
                  {venue.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Custom Solutions for Unique Spaces
              </h3>
              <p className="text-gray-600 mb-6">
                Have a unique venue or specific requirements? We design custom vending solutions tailored to your space, foot traffic, and audience preferences.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 font-semibold transition"
              >
                Discuss Your Needs
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Custom solutions"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}