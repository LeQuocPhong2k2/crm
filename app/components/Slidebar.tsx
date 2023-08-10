"use client";
import { useState, useEffect, memo } from "react";
import { TbReportAnalytics } from "react-icons/tb";
import { FaHouseChimney, FaPeopleGroup, FaProductHunt, FaCartShopping, FaHeadset, FaSun, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";

let itemsSlidebar = [
  {
    id: 1,
    name: "Trang chủ",
    icon: <FaHouseChimney />,
    path: "/",
    status: false,
    submenu: [
      {
        id: 1,
        name: "Trang chủ",
      },
    ],
  },
  {
    id: 2,
    name: "Khách hàng",
    icon: <FaPeopleGroup />,
    path: "/customer",
    status: false,
    submenu: [
      {
        id: 1,
        name: "Khách hàng",
      },
      {
        id: 2,
        name: "Nhóm khách hàng",
      },
      {
        id: 3,
        name: "Nhóm khách hàng",
      },
    ],
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

function Sidebar({ handleTitle }: any) {
  const [actionSidebar, setActionSidebar] = useState({
    name: "Trang chủ",
    icon: <FaHouseChimney />,
  });
  const [collapseSidebar, setCollapseSidebar] = useState(false);

  useEffect(() => {
    handleTitle(actionSidebar.name, actionSidebar.icon);
  }, [actionSidebar]);

  function handleCollapseSidebar() {
    if (collapseSidebar) {
      return "min-h-screen grid w-8 overflow-hidden relative bg-left" + " ";
    } else {
      return "min-h-screen grid w-56 relative bg-left" + " ";
    }
  }

  return (
    <div className={handleCollapseSidebar()}>
      <div className="h-80pt text-white">
        <ul className="space-y-2 font-medium ">
          {itemsSlidebar.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                setActionSidebar({ name: item.name, icon: item.icon });
              }}
              className="overflow-hidden cursor-pointer font-medium hover:bg-blue-900"
              style={actionSidebar.name === item.name ? { backgroundColor: "#ffff", color: "rgb(35, 63, 128)" } : {}}
            >
              <a href="#" className="h-10 flex items-center justify-start gap-3 p-1">
                <div>{item.icon}</div>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-20p flex flex-col justify-end text-white">
        <ul className="space-y-2 font-medium">
          <li className="overflow-hidden cursor-pointer font-medium hover:bg-blue-900">
            <a href="#" className="h-10 flex items-center justify-start gap-3 p-1">
              <div>
                <FaHeadset />
              </div>
              <div>
                <span>Cài đặt</span>
              </div>
            </a>
          </li>
          <li className="overflow-hidden cursor-pointer font-medium hover:bg-blue-900">
            <a href="#" className="h-10 flex items-center justify-start gap-3 p-1">
              <div>
                <FaSun />
              </div>
              <div>
                <span>Hỗ trợ</span>
              </div>
            </a>
          </li>
          {!collapseSidebar && (
            <li
              onClick={() => {
                setCollapseSidebar(true);
              }}
              className="overflow-hidden cursor-pointer font-medium hover:bg-blue-900"
            >
              <a href="#" className="h-10 flex items-center justify-start gap-3 p-1">
                <div>
                  <FaAnglesLeft />
                </div>
                <div>
                  <span>Thu gọn</span>
                </div>
              </a>
            </li>
          )}
          {collapseSidebar && (
            <li
              onClick={() => {
                setCollapseSidebar(false);
              }}
              className="overflow-hidden cursor-pointer font-medium hover:bg-blue-900"
            >
              <a href="#" className="h-10 flex items-center justify-start gap-3 p-1">
                <div>
                  <FaAnglesRight />
                </div>
                <div>
                  <span>Mở rộng</span>
                </div>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
