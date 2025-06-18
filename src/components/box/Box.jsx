import React, { use, useState } from "react";

const Box = ({ AsaidText, Reports }) => {

const [ivent, setIvent] = useState(false)

  return (
    <div className="box">
      <div className = {ivent ? "asaid" : "SaidBar" } >
        <div onClick={() => setIvent(!ivent) } className="asaid_header">
          <img className="asaid_header_img" src={AsaidText.logo} alt="logo" />
          {AsaidText.licon}
        </div>
        <div className="asaid_ul">
          {AsaidText.ulArr.map((item, index) => (
            <li key={index} className="asaid_li">
              {item.icon} <p>{item.p}</p>
            </li>
          ))}
        </div>
        <h4 className="asaid_h4">Support</h4>
        <div className="asaid_ul">
          {AsaidText.ulSupport.map((item, index) => (
            <li key={index} className="asaid_li">
              {item.icon} <p>{item.p}</p>
            </li>
          ))}
        </div>
      </div>
      <div className="category">
        <img className='bg-img' src={Reports} alt="bg-img"/>
      </div>
    </div>
  );
};

export default Box;
