import React from "react";
import "./Style.css";
import imgabout from "../../Images/aboutimage.jpg";
const Customabout4 = () => {
  return (
    <div className="containerabout4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={imgabout} style={{width:'100%',height:'auto'}} />
          </div>
          <div className="col-md-6 divabout4">
            <h3 className="titleabout4">We never stop innovating on behalf of our customers.</h3>
            <p className="textabout4">
              All 25,000 associates nationwide, coupled with the significant
              investments we’ve made in technology and digital innovation,
              enable us to deliver an iconic experience the way only CarMax can
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customabout4;
