import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawer(!mobileDrawer);
  };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} className="h-10  mr-2" />
            <span className="text-xl tracking-tight">React Tailwind</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((nav) => (
              <li key={nav.label}>
                <a href={nav.href}> {nav.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center justify-center space-x-12">
            <button className="py-2 px-3 rounded-md border">Sign In</button>
            <button className="bg-gradient-to-r from-purple-500 to-violet-900 px-3 py-2 rounded-md">
              Create an Account
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawer ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawer && (
          <div className="fixed right-0 -20 bg-neutral-900 w-full p-12 flex flex-col justify-start items-start lg:hidden">
            <ul>
              {navItems.map((nav) => (
                <li key={nav.label} className="py-4">
                  <a href={nav.href}>{nav.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <button className="py-2 px-3 rounded-md border">Sign In</button>
              <button className="bg-gradient-to-r from-purple-500 to-violet-900 px-3 py-2 rounded-md">
                Create an Account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
