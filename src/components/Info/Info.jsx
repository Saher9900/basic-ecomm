
function Info() {
  return (
    <section className="bg-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-100 rounded-2xl shadow-lg p-8">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Modern Electronics Store"
            className="w-full md:w-1/2 rounded-xl object-cover max-h-[400px]"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              LEADING ELECTRONICS RETAILER
            </h2>
            <p className="mb-4 text-gray-700 text-lg">
              Established in 2010, <span className="font-bold">ElectroMart</span> is your trusted source for the latest in consumer electronics. We offer a wide range of products including smartphones, laptops, smart home devices, and accessories from top brands. Our commitment to quality, customer service, and innovation has made us a favorite among tech enthusiasts.
            </p>
            <p className="mb-6 text-gray-700 text-lg">
              With a strong online presence and multiple retail locations, we ensure our customers get the best deals and after-sales support. Shop with confidence at ElectroMart, where technology meets reliability.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 mt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm font-semibold text-gray-600 mt-1">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10,000+</div>
                <div className="text-sm font-semibold text-gray-600 mt-1">Products Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm font-semibold text-gray-600 mt-1">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;