import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function CategoriesShowcase() {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: "📱",
      description: "Latest mobile devices and accessories",
      color: "from-blue-500 to-cyan-500",
      link: "/products/smartphones",
      products: "500+ products",
    },
    {
      id: 2,
      name: "Laptops",
      icon: "💻",
      description: "Premium computers for work and gaming",
      color: "from-purple-500 to-pink-500",
      link: "/products/laptops",
      products: "300+ products",
    },
    {
      id: 3,
      name: "Accessories",
      icon: "🎧",
      description: "Chargers, cases, and gear you need",
      color: "from-orange-500 to-red-500",
      link: "/products/accessories",
      products: "1000+ products",
    },
    {
      id: 4,
      name: "Smart Devices",
      icon: "🏠",
      description: "Smart home and wearable technology",
      color: "from-green-500 to-emerald-500",
      link: "/products/smart-devices",
      products: "200+ products",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-linear-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-amber-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-4 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/30">
            Browse
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Shop by Category
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our wide range of electronics across multiple categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <span className="inline-block text-xs font-bold text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                    {category.products}
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-amber-500 font-bold text-sm mt-6 group-hover:translate-x-1 transition-transform">
                  Browse Now
                  <HiArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-amber-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesShowcase;
