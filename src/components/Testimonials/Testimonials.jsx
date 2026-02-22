import { HiOutlineStar } from "react-icons/hi2";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Tech Enthusiast",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      content: "ElectroMart provides the best selection and prices on electronics. Their customer service is exceptional!",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      content: "Excellent quality products and fast shipping. I've been a loyal customer for 3 years now.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Martinez",
      role: "Student",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      content: "Great prices for students! The warranty and support options give me peace of mind with every purchase.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Johnson",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
      content: "Love the variety of tech products and detailed specifications. My go-to place for all electronics.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-amber-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 sm:mb-4 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/30">
            Customer reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Loved by Thousands
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            See what our satisfied customers have to say about their ElectroMart experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/20"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-slate-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
