import Image from "next/image";
import { useState } from "react";
import { FaBell, FaHouseChimney } from "react-icons/fa6";

function Header({ objSlidebar }: any) {
  const [actionSlidebar, setActionSlidebar] = useState("Trang chủ");

  return (
    <div className="border-b-2 ">
      <div className="flex items-center justify-between p-[4px] font-bold boxShadow">
        <div className="flex items-center gap-1 pl-2">
          <div className="p-2 bg-left text-white rounded-md">{objSlidebar.icon}</div>
          <h1>{objSlidebar.title}</h1>
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
          onClick={() => setActionSlidebar("DsClient")}
          style={actionSlidebar === "DsClient" ? { borderBottom: "3px solid rgb(29 78 216)", color: "rgb(29 78 216)" } : {}}
          className="cursor-pointer pl-2 pr-2 border-b-[3px] border-white hover:border-blue-800 ease-in duration-100"
        >
          Danh sách khách hàng
        </li>
        <li
          onClick={() => setActionSlidebar("AddClient")}
          style={actionSlidebar === "AddClient" ? { borderBottom: "3px solid rgb(29 78 216)", color: "rgb(29 78 216)" } : {}}
          className="cursor-pointer pl-2 pr-2 border-b-[3px] border-white hover:border-blue-800 ease-in duration-100"
        >
          Thêm khách hàng
        </li>

        <li
          onClick={() => setActionSlidebar("TotalClient")}
          style={actionSlidebar === "TotalClient" ? { borderBottom: "3px solid rgb(29 78 216)", color: "rgb(29 78 216)" } : {}}
          className="cursor-pointer pl-2 pr-2 border-b-[3px] border-white hover:border-blue-800 ease-in duration-100"
        >
          Doanh thu khách hàng
        </li>
      </ul>
    </div>
  );
}

export default Header;
