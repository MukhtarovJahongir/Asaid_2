import React from "react";
import { AiOutlineRise } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { BsCardChecklist } from "react-icons/bs";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import TESLA from "./assets/TESLA.png";
import Box from "./components/box/Box";
import Reports from "./assets/Reports.png";

const App = () => {
  const AsaidText = {
    logo: ` ${TESLA}`,
    licon: <FaBars className="bars" />,
    ulArr: [
      {
        icon: <AiOutlineRise className="icon_li" />,
        p: "Reports",
      },
      {
        icon: <BsFillLightningFill className="icon_li" />,
        p: "Library",
      },
      {
        icon: <HiUsers className="icon_li" />,
        p: "People",
      },
      {
        icon: <BsCardChecklist className="icon_li" />,
        p: "Activities",
      },
    ],
    ulSupport: [
      {
        icon: <PiLightbulbFilamentFill className="icon_li" />,
        p: "Get Started",
      },
      {
        icon: <IoMdSettings className="icon_li" />,
        p: "Settings",
      },
    ],
  };

  return (
    <div>
      <Box Reports={Reports} AsaidText={AsaidText}></Box>
    </div>
  );
};

export default App;
