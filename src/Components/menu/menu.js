import React from "react";
import "./menu.css";
// import img1 from "/items/img1.jpeg";


const Menu = () => {



    return (
        <>
            <div className="menu-container">
                <div className="menu-item" >
                    <div className="menu-heading">
                        QBH ERP Solutiuons
                    </div>
                    <div className="menu-image" >
                        <img src={ process.env.PUBLIC_URL +"/menu/img1.png"} alt="img1" className="menu-image" />
                    </div>
                    <div className="menu-data">
                        STOCK LIST
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-heading">
                       No. of  Total Items
                    </div>
                    <div className="menu-image">
                        <img src={ process.env.PUBLIC_URL +"/items/img2.png"} alt="img1" className="menu-image" />
                    </div>
                    <div className="menu-number">
                        105
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-heading">
                        No. of Discounted items
                    </div>
                    <div className="menu-image">
                        <img src={ process.env.PUBLIC_URL +"/menu/img3.png"} alt="img1" className="menu-image" />
                    </div>
                    <div className="menu-number">
                        15
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-heading">
                        Nos of total Stock
                    </div>
                    <div className="menu-image">
                        <img src={ process.env.PUBLIC_URL +"/menu/img4.png"} alt="img1" className="menu-image" />
                    </div>
                    <div className="menu-number">
                        10
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-heading">
                        Nos Of Categories
                    </div>
                    <div className="menu-image">
                        <img src={process.env.PUBLIC_URL +"/menu/img5.png"} alt="img1" className="menu-image" />
                    </div>
                    <div className="menu-number">
                        10
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-heading">
                    Item Received /Item sold
                    </div>
                    <div className="menu-image">
                        <img src={ process.env.PUBLIC_URL +"/menu/img6.png"} alt="img1" className="menu-image" />
                    </div>
                    <div className="menu-number">
                       05/07
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;