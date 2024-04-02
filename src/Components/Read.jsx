import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../Store/MockApi/MockSlice";
import Pop from "./Pop";

const Read = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.MockSlice.users);
  console.log("sel", selector);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  return (
    <div className=" flex flex-wrap  gap-4 grid grid-cols-4">
    
      {selector.map((item, id) => {
        return (
          <>
           
            <div className="max-w-sm rounded overflow-hidden shadow-lg ">
              <div className="px-6 py-4 ">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-700 text-base">{item.age}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {item.email}

               <div className="button flex gap-2">
               <button className="bg-green-600 rounded-lg p-[5px] text-white">
                  View
                </button>
               <button className="bg-red-600 rounded-lg p-[5px] text-white">
                  Delete
                </button>
                <button className="bg-blue-600 rounded-lg p-[5px] text-white">
                 Edit
                </button>
               </div>
              </div>
            </div>
          </>
        );
      })}
      
    </div>
  );
};

export default Read;
