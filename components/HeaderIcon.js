import React from "react";

export default function HeaderIcon({ Icon, active }) {
  return (
    <div className="cursor-pointer flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500  group ">
      <Icon className={`h-5 group-hover:text-blue-500 ${active && 'text-blue-500'}`}/>
    </div>
  );
}
