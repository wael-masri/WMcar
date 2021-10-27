import "./Style.css";
import React from "react";
import imgitem from '../../Images/item.jpg'


function Carditem() {
  return (
    <>
      <div className="container-fluid">
        <div className="carditem" style={{backgroundImage: `url(${imgitem})` }}>
          <div className="card_content">
          <h2 className="card_title">Something Awesome</h2>
          <p className="card_body">
            Lorem kaakk askakam m akm kam askm a skm km km mkakms ksm ak makm
            kam skmak m ksma kmkm s km skmak 
          </p>
          <a href="#" className="button">Learn More</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carditem;


