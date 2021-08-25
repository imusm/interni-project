import React from "react";
import logo from "../logo.svg";
import "./leftcolm.css";
const Leftcolm = () => {
  return (
    
      <div>
      <img src={logo} style={{width:"300px"}}/>
        <p className="para">
          State-of-the-art marketing automation platform for teams and business
          owners to manage their marketing compaigns.
        </p>
    </div>
   
  );
};
export default Leftcolm;
