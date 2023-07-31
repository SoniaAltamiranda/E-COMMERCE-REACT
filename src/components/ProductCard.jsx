import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => {
            console.log(product, "product");
            const { id, title, price, category, image } = product;

            return (
              <Link
                key={id}
                to={`/products/${id}`}
                className="p-4 border border-opacity-50 rounded-lg shadow-4"
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-[#8C7064] text-lg tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-bold font-medium">
                    {title}
                  </h2>
                  <p className="mt-1 text-md font-semibold text-[#8C7064]">
                    ${price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
