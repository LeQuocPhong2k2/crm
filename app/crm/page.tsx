"use client";
import { useState, useEffect } from "react";
import { TbReportAnalytics } from "react-icons/tb";
import { FaHouseChimney, FaPeopleGroup, FaProductHunt, FaCartShopping, FaHeadset, FaSun, FaAnglesLeft } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

let itemsSlidebar = [
  {
    id: 1,
    name: "Trang chủ",
    icon: <FaHouseChimney />,
    path: "/",
    status: false,
  },
  {
    id: 2,
    name: "Khách hàng",
    icon: <FaPeopleGroup />,
    path: "/customer",
    status: false,
  },
  {
    id: 3,
    name: "Sản phẩm",
    icon: <FaProductHunt />,
    path: "/product",
    status: false,
  },
  {
    id: 4,
    name: "Bán hàng",
    icon: <FaCartShopping />,
    path: "/order",
    status: true,
  },
  {
    id: 5,
    name: "Báo cáo",
    icon: <TbReportAnalytics />,
    path: "/report",
    status: false,
  },
  {
    id: 6,
    name: "Công việc",
    icon: <MdWorkHistory />,
    path: "/work",
    status: false,
  },
];

const Page = () => {
  const [actionSlidebar, setActionSlidebar] = useState("Trang chủ");
  useEffect(() => {
    console.log(actionSlidebar);
  }, [actionSlidebar]);

  return (
    <div className="h-screen w-screen bg-white flex items-start">
      {/* col left */}
      <div className="h-screen w-56 relative z-10 bg-left">
        <div className="h-80pt w-full text-white">
          <ul className="space-y-2 font-medium">
            {itemsSlidebar.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setActionSlidebar(item.name);
                }}
                className="relative cursor-pointer font-medium hover:bg-blue-900 flex items-center justify-between"
                style={actionSlidebar === item.name ? { backgroundColor: "#ffff", color: "rgb(35, 63, 128)" } : {}}
              >
                <a href="#" className="flex items-center p-2">
                  {item.icon}
                  <span className="flex-1 ml-3">{item.name}</span>
                  {/* {item.status ? <span className="absolute right-24 top-1 w-5 h-5 flex items-center justify-center p-2 bg-red-500 rounded-full">1</span> : ""} */}
                </a>
                {actionSlidebar === item.name ? <div className="w-12 h-14 rounded-full bg-white absolute -right-8"></div> : ""}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-20pt w-full text-white">
          <ul className="space-y-2 font-medium">
            <li className="relative cursor-pointer font-medium hover:bg-blue-900 flex items-center justify-between">
              <a href="#" className="flex items-center p-2">
                <FaHeadset />
                <span className="flex-1 ml-3">Hỗ trợ</span>
                {/* {item.status ? <span className="absolute right-24 top-1 w-5 h-5 flex items-center justify-center p-2 bg-red-500 rounded-full">1</span> : ""} */}
              </a>
            </li>
            <li className="relative cursor-pointer font-medium hover:bg-blue-900 flex items-center justify-between">
              <a href="#" className="flex items-center p-2">
                <FaSun />
                <span className="flex-1 ml-3">Cài đặt</span>
                {/* {item.status ? <span className="absolute right-24 top-1 w-5 h-5 flex items-center justify-center p-2 bg-red-500 rounded-full">1</span> : ""} */}
              </a>
            </li>
            <li className="relative cursor-pointer font-medium hover:bg-blue-900 flex items-center justify-between">
              <a href="#" className="flex items-center p-2">
                <FaAnglesLeft />
                <span className="flex-1 ml-3">Thu gọn</span>
                {/* {item.status ? <span className="absolute right-24 top-1 w-5 h-5 flex items-center justify-center p-2 bg-red-500 rounded-full">1</span> : ""} */}
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* col right */}
      <div className="h-screen"></div>
    </div>
  );
};

export default Page;
