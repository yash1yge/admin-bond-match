import axios from "axios";
import React, { useEffect, useState } from "react";
import {
   Menu,
   MenuHandler,
   MenuList,
   MenuItem,
   Button
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const Panel = () => {
   const [data, setData] = useState();

   const handleData = async () => {
      await axios
         .get("https://match-1dyu.onrender.com/bound_count/v1/fetch_records")
         .then((data) => {
            setData(data.data.data);
         })
         .catch((e) => {
            console.log("error", e);
         });
   };

   const navigate = useNavigate();

   const handleLogOut = () => {
      localStorage.removeItem("admin");
      navigate("/");
   };

   const handleDel = async (id) => {
      await axios.delete(
         `https://match-1dyu.onrender.com/bound_count/v1/delete_records/${id}`
      );
      handleData();
   };

   useEffect(() => {
      handleData();
      if (localStorage.getItem("admin")) {
         navigate("/data");
      } else {
         navigate("/");
      }
   }, [navigate]);

   console.log(data);

   return (
      <div className="md:p-[40px] p-[20px]">
         <div className="flex justify-between items-center">
            <h3 className="text-center text-gray-700 sm:text-3xl text-[16px] font-semibold">
               Welcome to Admin Panel
            </h3>
            <button
               onClick={handleLogOut}
               className="px-3 sm-text-base text-sm font-semibold sm:py-2 py-1 w-max text-center bg-[#f2f1ff] border-[1px] border-[#625afa] rounded-md text-[#625afa]"
            >
               Log out
            </button>
         </div>
         <div className="sm:mt-[50px] mt-[20px] max-w-[1000px] w-full mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
               {data &&
                  data.map((val, i) => {
                     let date = new Date(val.date).toLocaleString();
                     return (
                        <div key={i} className="relative">
                           <div className="rounded-[8px] bg-[#f2f1ff] border-[1px] border-[#e0e0e0] p-[10px]">
                              <div className="flex items-center sm:text-[16px] text-[14px] text-gray-700">
                                 <h3 className="font-semibold text-[#817bf5] sm:w-[120px] w-[100px]">
                                    No:
                                 </h3>
                                 <span>{i + 1}</span>
                              </div>
                              <div className="flex items-center sm:text-[16px] text-[14px] text-gray-700">
                                 <h3 className="font-semibold text-[#817bf5] sm:w-[120px] w-[100px]">
                                    Name:
                                 </h3>
                                 <span>{val.malename}</span>
                              </div>
                              <div className="flex items-center sm:text-[16px] text-[14px] text-gray-700">
                                 <h3 className="font-semibold text-[#817bf5] sm:w-[120px] w-[100px]">
                                    CrushName:
                                 </h3>
                                 <span>{val.femalename}</span>
                              </div>
                              <div className="flex items-center sm:text-[16px] text-[14px] text-gray-700">
                                 <h3 className="font-semibold text-[#817bf5] sm:w-[120px] w-[100px]">
                                    Lovecount:
                                 </h3>
                                 <span>{val.lovecount}</span>
                              </div>
                              <div className="flex items-center sm:text-[16px] text-[14px] text-gray-700">
                                 <h3 className="font-semibold text-[#817bf5] sm:w-[120px] w-[100px]">
                                    Time:
                                 </h3>
                                 <span>{date}</span>
                              </div>
                           </div>
                           <Menu placement="bottom-end">
                              <MenuHandler>
                                 <button className="flex absolute top-3 right-2 focus:outline-none items-center justify-center">
                                    <BsThreeDotsVertical />
                                 </button>
                              </MenuHandler>
                              <MenuList className="px-[0px] py-[4px] min-w-[150px]">
                                 <MenuItem
                                    onClick={() => handleDel(val._id)}
                                    className="rounded-none py-1 px-2 font-medium text-red-600"
                                 >
                                    Delete
                                 </MenuItem>
                              </MenuList>
                           </Menu>
                        </div>
                     );
                  })}
            </div>
         </div>
      </div>
   );
};

export default Panel;
