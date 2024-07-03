import {
  Logo,
  Search,
  Notifications,
  Settings,
  Wallet,
  Inquiry,
} from "../../assets";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const navLinkOptions = [
    {
      title: "Notifications",
      icon: <img src={Notifications} alt="notifications" />,
      url: "/notifications",
    },
    {
      title: "Wallet",
      icon: <img src={Wallet} alt="wallet" />,
      url: "/wallet",
    },
    {
      title: "Inquiries",
      icon: <img src={Inquiry} alt="inquiries" />,
      url: "/inquiries",
    },
    {
      title: "Settings",
      icon: <img src={Settings} alt="settings" />,
      url: "/settings",
    },
  ];
  return (
    <>
      <header className="flex justify-between w-full items-center px-[10px] py-[36px] bg-white border-b border-[#E4E7EC] h-[89px]">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <div className="relative flex items-center">
            <span className="block text-[#475367] text-[14px] font-semibold absolute top-[14px] left-8 ">
              <img src={Search} alt="search" />
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-[#F0F2F5] ml-4 pl-12 h-[40px] w-[629px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-50"
            />
          </div>
        </div>

        <div className="flex">
          {navLinkOptions.map((item, index) => (
            <Link to={item.url} key={index} className="flex items-center ml-8">
              {item.icon}
              <span className="text-[#475367] text-[14px] font-semibold ml-2">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default NavBar;
