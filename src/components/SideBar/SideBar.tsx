import React from "react";
import {
  User,
  Lock,
  Notifications,
  Money,
  Tag,
  Cloud,
  SignOut,
  Users,
} from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBar() {
  const SideBarOptions = [
    {
      title: "Account",
      icon: <img src={User} alt="User" className="w-6 h-6" />,
      url: "",
    },
    {
      title: "Security",
      icon: <img src={Lock} alt="Security" className="w-6 h-6" />,
      url: "",
    },
    {
      title: "Notifications",
      icon: <img src={Notifications} alt="Notifications" className="w-6 h-6" />,
      url: "",
    },
    {
      title: "Pricing",
      icon: <img src={Money} alt="Pricing" className="w-6 h-6" />,
      url: "",
    },

    {
      title: "Sales",
      icon: <img src={Tag} alt="Sales" className="w-6 h-6" />,
      url: "",
    },
    {
      title: "Users & Roles",
      icon: <img src={Users} alt="Users & Roles" className="w-6 h-6" />,
      url: "Settings/user-roles",
    },
    {
      title: "Backups",
      icon: <img src={Cloud} alt="Backups" className="w-6 h-6" />,
      url: "",
    },
  ];

  //   const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="relative flex flex-col bg-white  h-screen px-[10px]">
        <h2 className="text-lg font-semibold text-gray-600 mt-6">Settings</h2>
        {SideBarOptions.map((option, index) => (
          <Link
            to={option.url}
            key={index}
            className="flex items-center justify-start w-full h-12 px-4 my-2 text-sm text-gray-500 rounded-lg hover:bg-primary-50 hover:text-primary-100"
          >
            {option.icon}
            <span className="ml-4 ">{option.title}</span>
          </Link>
        ))}
        <Link
          to="/"
          className="absolute bottom-0 border py-3 px-4 rounded-[4px] mb-12"
        >
          <div className="flex ">
            <img src={SignOut} alt="SignOut" className="w-6 h-6 mr-4" />
            <span className="block">Back to Dashboard</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SideBar;
