import { Link } from "react-router-dom";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "motion/react";

function Contact() {
  const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },
  };

  const heroChild = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  const cardsRowVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 0.61, 0.36, 1],
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        className="bg-slate-900 text-white py-16 px-4"
        variants={heroVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={heroChild}
        >
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact us
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Have a question or want to place an order? We’re here to help.
          </p>
        </motion.div>
      </motion.section>

      {/* Contact cards + form */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={cardsRowVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a
            href="mailto:info@electromart.example"
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all"
            variants={cardVariants}
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mb-4">
              <HiOutlineMail className="w-6 h-6" />
            </span>
            <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
            <p className="text-slate-600 text-sm">info@electromart.example</p>
          </motion.a>
          <motion.a
            href="tel:+201234567890"
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all"
            variants={cardVariants}
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mb-4">
              <HiOutlinePhone className="w-6 h-6" />
            </span>
            <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
            <p className="text-slate-600 text-sm">+20 123 456 7890</p>
          </motion.a>
          <motion.div
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm"
            variants={cardVariants}
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-100 text-amber-600 mb-4">
              <HiOutlineLocationMarker className="w-6 h-6" />
            </span>
            <h3 className="font-semibold text-slate-900 mb-1">Visit us</h3>
            <p className="text-slate-600 text-sm">Cairo, Egypt</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-slate-600 mb-6">
            Prefer WhatsApp? Browse our{" "}
            <Link
              to="/products"
              className="text-amber-600 font-semibold hover:text-amber-700 underline"
            >
              products
            </Link>{" "}
            and use the “Order on WhatsApp” button for quick orders.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors"
          >
            Shop now
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
