import React, { useState } from "react";
import "./items.css";
// import img1 from "../../../public/images/img1.jpeg"
const Items = () => {
  const [activeItem, setActiveItem] = useState(false);
  const handleClick = (item) => (event) => {
    // 👇️ toggle isActive state on click
    // setActive(!isActive);
    setActiveItem(item);
    // setIsActive(current => !current);
  };
  return (
    <>
      <div className="items-container">
        <div
          className={activeItem === "dashboard" ? "select-item" : "items-item"}
          onClick={handleClick("dashboard")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img1.png"}
            alt="img1"
            className="items-item-image"
          />
          <div className="items-item-title">Dashboard</div>
        </div>
        <div
          className={
            activeItem === "stock-management" ? "select-item" : "items-item"
          }
          onClick={handleClick("stock-management")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img2.png"}
            alt="img2"
            className="items-item-image"
          />
          <div className="items-item-title">
            Stock <br />
            Management
          </div>
        </div>
        <div
          className={activeItem === "stock-transfer" ? "select-item" : "items-item"}
          onClick={handleClick("stock-transfer")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img3.png"}
            alt="img3"
            className="items-item-image"
          />
          <div className="items-item-title">
            Stock
            <br /> Transfer
          </div>
        </div>
        <div
          className={activeItem ==="stock-update" ? "select-item" : "items-item"}
          onClick={handleClick("stock-update")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img4.png"}
            alt="img4"
            className="items-item-image"
          />
          <div className="items-item-title">
            Stock
            <br /> Update
          </div>
        </div>
        <div
          className={activeItem === "stock-upload" ? "select-item" : "items-item"}
          onClick={handleClick("stock-upload")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img5.png"}
            alt="img5"
            className="items-item-image"
          />
          <div className="items-item-title">
            Stock <br />
            Upload
          </div>
        </div>
        <div
          className={activeItem === "stock-reports" ? "select-item" : "items-item"}
          onClick={handleClick("stock-reports")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img6.png"}
            alt="img6"
            className="items-item-image"
          />
          <div className="items-item-title">
            Stock <br />
            Reports
          </div>
        </div>
        <div
          className={activeItem === "products-label"? "select-item" : "items-item"}
          onClick={handleClick("products-label")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img7.png"}
            alt="img7"
            className="items-item-image"
          />
          <div className="items-item-title">
            Products <br />
            Label
          </div>
        </div>
        <div
          className={activeItem === "setup-inventory" ? "select-item" : "items-item"}
          onClick={handleClick("setup-inventory")}
        >
          <img
            src={process.env.PUBLIC_URL + "/items/img8.jpeg"}
            alt="img8"
            className="items-item-image"
          />
          <div className="items-item-title">
            Setup
            <br /> Inventory
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;
