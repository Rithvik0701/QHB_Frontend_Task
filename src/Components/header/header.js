import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
        <div className="logo">
          {/* Replace the URL below with the path to your logo image */}
          <img src={ process.env.PUBLIC_URL + "/header/logo.jpeg"} className="logo" alt="Company Logo" />
        </div>
        <div className="center-header">
          
        <div className="company-name">
          {/* Replace 'Your Company' with your actual company name */}
          QHB SOLUTIONS PVT LTD 
        </div>
          <div className="date-time">
            12/5/2023 12:00:00 PM
        </div>
        
        </div>
        <div className="icons">
          {/* Add your icons or components here on the right side */}
          {/* Example: */}
          <div className="icon-column">

          <img src={process.env.PUBLIC_URL + "/header/img1.jpeg" } className="icon" alt="logo1" />
          <img src={process.env.PUBLIC_URL + "/header/img2.jpeg" } className="icon" alt="logo2" />
          <img src={process.env.PUBLIC_URL + "/header/img3.jpeg" } className="icon" alt="logo3" />
          <img src={process.env.PUBLIC_URL + "/header/img4.jpeg" } className="icon" alt="logo4" />
          <img src={process.env.PUBLIC_URL + "/header/img5.jpeg" } className="icon" alt="logo5" />
          <img src={process.env.PUBLIC_URL + "/header/img6.jpeg" } className="icon" alt="logo6" />
          <img src={process.env.PUBLIC_URL + "/header/img7.jpeg" } className="icon" alt="logo7" />
          <img src={process.env.PUBLIC_URL + "/header/img8.jpeg" } style={{width:'3%'}} className="icon" alt="logo8" />
          <img src={process.env.PUBLIC_URL + "/header/img9.jpeg" } style={{width:'3%'}} className="icon" alt="logo9" />
          <img src={process.env.PUBLIC_URL + "/header/img10.jpeg" } style={{width:'3%'}} className="icon" alt="logo10" />
          {/* <i className="fa fa-search"></i> */}
          {/* <i className="fa fa-user"></i> */}
          {/* Add more icons or components as needed */}
          </div>
          <div className="icon-username">
            User Name : Ram Singh Sharma
          </div>
          <div className="icon-details">
            User ID:105 , Sales Person , Level:205 
          </div>
        </div>
      </div>   
    )


}


export default Header;