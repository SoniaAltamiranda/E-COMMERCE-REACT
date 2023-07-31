import { useEffect, useState } from "react";
import { FiShoppingBag, FiUsers, FiDollarSign } from "react-icons/fi";

const OverviewCard = () => {
  const [productsSold, setProductsSold] = useState(0);
  const [usersRegistered, setUsersRegistered] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    setProductsSold(123);
    setUsersRegistered(456);
    setTotalSales(789);
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/3 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiShoppingBag className="text-[#8C7064] w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">{productsSold}</h2>
              <p className="leading-relaxed">Sold products</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiUsers className="text-[#8C7064] w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">{usersRegistered}</h2>
              <p className="leading-relaxed">Registered users</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <FiDollarSign className="text-[#8C7064] w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-3xl text-gray-900">{totalSales}</h2>
              <p className="leading-relaxed">Total sales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewCard;
