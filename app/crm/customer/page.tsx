import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaBell, FaFilter, FaMagnifyingGlass, FaPeopleGroup, FaRegCircleXmark, FaUserLarge, FaXmark } from "react-icons/fa6";
import { Slide } from "react-slideshow-image";
const arrMenu = [
  {
    id: 1,
    name: "Danh sách khách hàng",
  },
  {
    id: 2,
    name: "Thêm khách hàng",
  },
  {
    id: 3,
    name: "Báo cáo",
  },
];

const arrGroupCustomer = [
  {
    id: 1,
    name: "Chưa có nhóm",
    data: "noGroup",
  },
  {
    id: 2,
    name: "Khách hàng tiềm năng",
    data: "potential",
  },
  {
    id: 3,
    name: "Khách hàng thân thiết",
    data: "loyal",
  },
  {
    id: 4,
    name: "Sinh viên",
    data: "student",
  },
  {
    id: 5,
    name: "Khách hàng VIP",
    data: "vip",
  },
  {
    id: 6,
    name: "Viên chức",
    data: "officer",
  },
  {
    id: 7,
    name: "Công nhân",
    data: "worker",
  },
];

interface IArrSelectGroupCustomer {
  id: number;
  name: string;
  data: string;
}

function Customer() {
  const [onClickMenu, setOnClickMenu] = useState("Danh sách khách hàng");
  const [onFocusFilter, setOnFocusFilter] = useState(false);
  // ------------------------------------
  const [arrSelect, setArrSelect] = useState<IArrSelectGroupCustomer[]>([]);
  function handleSetValueIpGroupCustomer() {
    if (arrSelect.length === 1) {
      return arrSelect[0].name;
    } else if (arrSelect.length > 1) {
      return "Đã chọn " + arrSelect.length + " nhóm";
    } else {
      return "";
    }
  }
  // ------------------------------------
  let focusRef = useRef<any>(null);
  useEffect(() => {
    let handle = (e: any) => {
      if (!focusRef.current.contains(e.target)) {
        setOnFocusFilter(false);
      }
    };
    document.addEventListener("mousedown", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });
  // ------------------------------------
  return (
    <div className="min-h-screen grid-20-80 w-full bg-white overflow-auto">
      {/* header */}
      <div className="z-50 text-slate-800 bg-white">
        {/* top */}
        <div className="flex items-center justify-between p-1 shadow-md">
          <div className="flex items-center gap-2 pl-2 font-medium">
            <div className="p-2 rounded-md bg-left text-white">
              <FaPeopleGroup />
            </div>
            <h1>Khách hàng</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-full p-2 bg-slate-300 text-slate-800">
              <FaBell />
            </div>
            <Image className="rounded-full" src="/avata.png" alt="logo" width={30} height={30} />
          </div>
        </div>
        {/* bottom */}
        <div className="p-1">
          <ul className="flex font1-normal border-b-2 min-w-[30rem]">
            {arrMenu.map((item) => (
              <li
                key={item.id}
                onClick={(e) => {
                  setOnClickMenu(item.name);
                }}
                style={onClickMenu === item.name ? { borderBottom: "2px solid rgb(30 64 175)", color: "rgb(30 64 175)" } : {}}
                className="cursor-pointer pl-1 pr-2 hover:border-b-2 hover:border-blue-800 ease-in-out transition-colors duration-150"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col items-start p-1">
        <ul className="flex items-center gap-4">
          <li className="flex items-center rounded-lg border-gray-500 border-2">
            <div className="flex items-center gap-1 p-1">
              <FaMagnifyingGlass />
              <input type="text" className="p-0 focus:ring-0 bg-white ring-0 border-0" placeholder="Tìm tên, sđt khách hàng..." />
            </div>
            <div className="flex items-center text-white bg-left rounded-r-md border-l-2 border-gray-500 cursor-pointer p-2">
              <FaFilter />
            </div>
          </li>
          <li ref={focusRef} style={onFocusFilter ? { border: "2px solid rgb(37 99 235)" } : {}} className="flex items-center relative rounded-lg border-gray-500 border-2 cursor-pointer">
            <div className="flex items-center relative">
              <div className="flex items-center gap-1 p-1">
                <FaPeopleGroup />
                <input
                  onClick={() => setOnFocusFilter(true)}
                  value={handleSetValueIpGroupCustomer()}
                  onChange={(e) => console.log(e.target.value)}
                  type="text"
                  className="p-0 focus:ring-0 bg-white ring-0 border-0"
                  placeholder="Chọn nhóm khách hàng"
                />
                <div
                  className="absolute right-10 text-gray-500 p-2"
                  onClick={() => {
                    setArrSelect([]);
                  }}
                >
                  <FaRegCircleXmark />
                </div>
              </div>
              <div onClick={() => setOnFocusFilter(true)} className="flex items-center text-gray-500 border-l-2 border-gray-500 cursor-pointer p-2">
                <FaAngleDown />
              </div>
            </div>
            {onFocusFilter && (
              <div className="absolute w-full rounded shadow-md ring-1 ring-zinc-400 top-10">
                <ul>
                  {arrGroupCustomer.map((item, index) => (
                    <li key={item.id} className="w-full hover:bg-zinc-400">
                      <div className="flex items-center gap-2 pl-2">
                        <input
                          type="checkbox"
                          id={item.data}
                          checked={arrSelect.includes(item)}
                          onChange={() => {
                            if (arrSelect.includes(item)) {
                              // nếu có thì xóa nó đi
                              let newArr = arrSelect.filter((item) => item.id !== arrGroupCustomer[index].id);
                              setArrSelect(newArr);
                            } else {
                              // nếu chưa thì thêm nó vào
                              setArrSelect([...arrSelect, arrGroupCustomer[index]]);
                            }
                            setOnFocusFilter(false);
                          }}
                        />
                        <label className="w-full p-2 cursor-pointer" htmlFor={item.data}>
                          {item.name}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
          <li className="flex items-center rounded-lg border-gray-500 border-2">
            <div className="flex items-center gap-1 p-1">
              <FaUserLarge />
              <input type="text" className="p-0 focus:ring-0 bg-white ring-0 border-0" placeholder="Chọn người phụ trách" />
            </div>
            <div className="flex items-center text-gray-500 border-l-2 border-gray-500 cursor-pointer p-2">
              <FaAngleDown />
            </div>
          </li>
        </ul>
        <div>
          <Slide>
            {arrGroupCustomer.map((item, index) => (
              <div className="flex text-black">
                <span>{item.name}</span>
              </div>
            ))}
          </Slide>
        </div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  );
}

export default Customer;
