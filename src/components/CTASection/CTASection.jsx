import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-linear-to-r from-slate-900 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -z-10" />

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block text-amber-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-4 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/30">
                Limited offer
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Unbeatable <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Deals</span> This Season
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                Get up to 50% off on selected electronics. Premium quality, unbeatable prices. Shop now and save big on all your favorite tech!
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-500 font-bold">✓</span>
                  </div>
                  <span className="text-slate-300 font-medium">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-500 font-bold">✓</span>
                  </div>
                  <span className="text-slate-300 font-medium">30-day easy returns guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-amber-500 font-bold">✓</span>
                  </div>
                  <span className="text-slate-300 font-medium">Expert customer support 24/7</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                >
                  Shop Now
                  <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-amber-500 text-amber-500 font-bold rounded-lg hover:bg-amber-500/10 transition-all duration-300"
                >
                  View All Deals
                </Link>
              </div>
            </div>

            {/* Right Content - Image/Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {/* Stat Card 1 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="text-4xl font-black text-amber-500 mb-2">50%</div>
                <p className="text-slate-300 font-medium text-sm">Max Discount</p>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="text-4xl font-black text-amber-500 mb-2">10K+</div>
                <p className="text-slate-300 font-medium text-sm">Products Flash Sale</p>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="text-4xl font-black text-amber-500 mb-2">24h</div>
                <p className="text-slate-300 font-medium text-sm">Limited Time Offer</p>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-850 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300">
                <div className="text-4xl font-black text-amber-500 mb-2">99%</div>
                <p className="text-slate-300 font-medium text-sm">Customer Satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
