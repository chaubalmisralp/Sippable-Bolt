import { Coffee, Award, Zap, Sparkles } from 'lucide-react';

const machines = [
  {
    name: 'Evoke',
    description: 'State-of-the-art touchscreen interface with customizable drink options. Perfect for high-traffic locations.',
    features: ['Touchscreen Display', 'Premium Espresso', '25+ Drink Options', 'Energy Efficient'],
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/6347995/pexels-photo-6347995.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Coffee+',
    description: 'Sleek design meets exceptional coffee quality. Ideal for modern offices and corporate environments.',
    features: ['Compact Design', 'Bean-to-Cup', 'Quick Service', 'Easy Maintenance'],
    icon: Coffee,
    image: 'https://images.pexels.com/photos/6347992/pexels-photo-6347992.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Nescafé',
    description: 'The trusted global brand delivering consistent quality and familiar flavors everyone loves.',
    features: ['Brand Recognition', 'Reliable Performance', 'Multiple Formats', 'Cost Effective'],
    icon: Award,
    image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Lavazza',
    description: 'Italian excellence in every cup. Premium coffee experience with authentic espresso drinks.',
    features: ['Italian Heritage', 'Premium Quality', 'Specialty Drinks', 'Barista-Style'],
    icon: Zap,
    image: 'https://images.pexels.com/photos/6347730/pexels-photo-6347730.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Machines() {
  return (
    <section id="machines" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Coffee Machines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with the world's leading brands to deliver exceptional coffee experiences. Choose the perfect machine for your venue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {machines.map((machine, index) => {
            const Icon = machine.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{machine.name}</h3>
                  <p className="text-gray-600 mb-6">{machine.description}</p>

                  <div className="grid grid-cols-2 gap-3">
                    {machine.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-amber-700 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Not sure which machine is right for you?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 font-semibold transition"
          >
            Get Expert Advice
          </button>
        </div>
      </div>
    </section>
  );
}