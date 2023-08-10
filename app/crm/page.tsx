"use client";
import { useState, useEffect } from "react";
import { TbReportAnalytics } from "react-icons/tb";
import { FaHouseChimney, FaPeopleGroup, FaProductHunt, FaCartShopping, FaHeadset, FaSun, FaAnglesLeft, FaAnglesRight, FaBell } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import Sidebar from "@/app/components/Slidebar";
import Image from "next/image";
import Header from "../components/Header";
import Customer from "./customer/page";

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
  const [actionSidebar, setActionSidebar] = useState({
    title: "Trang chủ",
    icon: <FaHouseChimney />,
  });
  const [collapseSidebar, setCollapseSidebar] = useState(false);
  function handleClickSidebar(title: any, icon: any) {
    setActionSidebar({ title: title, icon: icon });
  }

  function handleCollapseSidebar() {
    if (collapseSidebar) {
      return "h-screen w-8 bg-left" + " ";
    } else {
      return "h-screen w-56 bg-left" + " ";
    }
  }

  return (
    <main className="min-h-screen flex flex-row items-start">
      {/* col left */}
      <Sidebar handleTitle={handleClickSidebar} />
      {/* col right */}
      <Customer />
    </main>
  );
};

export default Page;
{
  /* header */
}
{
  /* <div className="border-b-2 min-w-[40rem]">
          <div className="flex items-center justify-between p-[4px] font-bold boxShadow">
            <div className="flex items-center gap-1 pl-2">
              <div className="p-2 bg-left text-white rounded-md">
                <FaHouseChimney />
              </div>
              <h1>Trang chủ</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 bg-slate-300 text-slate-800">
                <FaBell />
              </div>
              <Image className="rounded-full" src="/avata.png" alt="logo" width={30} height={30} />
            </div>
          </div>
          <ul className="flex items-center p-2 pb-0">
            <li
              onClick={() => setActionSlidebar("AddClient")}
              style={actionSlidebar === "AddClient" ? { borderBottom: "3px solid rgb(29 78 216)", color: "rgb(29 78 216)" } : {}}
              className="cursor-pointer pl-2 pr-2 border-b-[3px] border-white hover:border-blue-800 ease-in duration-100"
            >
              Thêm khách hàng
            </li>
            <li
              onClick={() => setActionSlidebar("DsClient")}
              style={actionSlidebar === "DsClient" ? { borderBottom: "3px solid rgb(29 78 216)", color: "rgb(29 78 216)" } : {}}
              className="cursor-pointer pl-2 pr-2 border-b-[3px] border-white hover:border-blue-800 ease-in duration-100"
            >
              Danh sách khách hàng
            </li>
            <li
              onClick={() => setActionSlidebar("TotalClient")}
              style={actionSlidebar === "TotalClient" ? { borderBottom: "3px solid rgb(29 78 216)", color: "rgb(29 78 216)" } : {}}
              className="cursor-pointer pl-2 pr-2 border-b-[3px] border-white hover:border-blue-800 ease-in duration-100"
            >
              Doanh thu khách hàng
            </li>
          </ul>
        </div> */
}
{
  /* <Header objSlidebar={actionSlidebar} /> */
}
{
  /* content */
}
