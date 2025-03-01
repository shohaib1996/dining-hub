import Image from "next/image";

const ServiceOfferPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        What We Offer
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Fast Delivery Offer */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-4 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
          <Image
            src="https://www.pngmart.com/files/21/Food-Delivery-Scooter-PNG-Isolated-HD-Pictures.png"
            alt="Fast Delivery"
            height={100}
            width={100}
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            <span className="text-green-500">Fast Delivery</span>
          </h3>
          <p className="text-gray-600">
            We offer speedy and reliable delivery for all our services and
            products.
          </p>
        </div>

        {/* Best Quality Offer */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-4 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
          <Image
            src="https://pngimg.com/uploads/chef/chef_PNG192.png"
            alt="Best Quality"
            height={100}
            width={100}
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            <span className="text-blue-500">Best Quality</span>
          </h3>
          <p className="text-gray-600">
            Our products and services are crafted with the highest quality
            standards.
          </p>
        </div>

        {/* Easy to Order Offer */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-4 border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
          <Image
            src="https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-food-order-apps-png-image_11599460.png"
            alt="Easy to Order"
            height={100}
            width={100}
            className="w-16 h-16 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            <span className="text-purple-500">Easy to Order</span>
          </h3>
          <p className="text-gray-600">
            Our easy-to-use platform makes ordering products and services a
            breeze.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceOfferPage;
