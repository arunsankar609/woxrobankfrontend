import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMoneyBill,
  faHandHoldingUsd,
  faFileAlt,
  faExchangeAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation,useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (path) => {
    setActiveTab(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div>
      <header className="bg-slate-200 text-white py-4">
        {/* <div className="text-xl font-bold text-start text-black">My Banking App</div> */}
        <div className="container mx-auto flex flex-col items-center">
          <nav>
            <ul className="flex space-x-4 text-black">
              <li>
                <Link
                  to="/home"
                  className={`hover:text-gray-700 ${
                    activeTab === "/home" ? "text-blue-700 font-bold underline underline-offset-4 " : ""
                  }`}
                  onClick={() => handleTabClick("/home")}
                >
                  <FontAwesomeIcon icon={faHome} />
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/home/deposit"
                  className={`hover:text-gray-700 ${
                    activeTab === "/home/deposit" ? "text-blue-700 font-bold underline underline-offset-4 " : ""
                  }`}
                  onClick={() => handleTabClick("/home/deposit")}
                >
                  <FontAwesomeIcon icon={faMoneyBill} />
                  <span className="ml-2">Deposit</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/home/withdraw"
                  className={`hover:text-gray-700 ${
                    activeTab === "/home/withdraw" ? "text-blue-700 font-bold underline underline-offset-4 " : ""
                  }`}
                  onClick={() => handleTabClick("/home/withdraw")}
                >
                  <FontAwesomeIcon icon={faHandHoldingUsd} />
                  <span className="ml-2">Withdraw</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/home/transfer"
                  className={`hover:text-gray-700 ${
                    activeTab === "/home/transfer" ? "text-blue-700 font-bold underline underline-offset-4 " : ""
                  }`}
                  onClick={() => handleTabClick("/home/transfer")}
                >
                  <FontAwesomeIcon icon={faExchangeAlt} />
                  <span className="ml-2">Transfer</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/home/statement"
                  className={`hover:text-gray-700 ${
                    activeTab === "/home/statement" ? "text-blue-700 font-bold underline underline-offset-4 " : ""
                  }`}
                  onClick={() => handleTabClick("/home/statement")}
                >
                  <FontAwesomeIcon icon={faFileAlt} />
                  <span className="ml-2">Statement</span>
                </Link>
              </li>
             
              <li>
                <Link
                  to=""
                  className={`hover:text-gray-700 ${
                    activeTab === "/home/logout" ? "text-blue-700" : ""
                  }`}
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <span className="ml-2">Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="p-2 m-2 text-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
