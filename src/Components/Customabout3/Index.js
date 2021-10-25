import React from "react";
import "./Style.css";
import stick6 from '../../Images/stick6.svg'
import stick7 from '../../Images/stick7.svg'
import stick8 from '../../Images/stick8.svg'
import stick9 from '../../Images/stick9.svg'
import stick10 from '../../Images/stick10.svg'
import stick11 from '../../Images/stick11.svg'
const Customabout3 = () => {
  return (
    <div className="containerabout3">
      <div className="container">
        <div className="row divabout3">
            <div className="col-md-12 text-center">
                <h3 className="h3about3">What we do</h3>
            </div>
          <div className="col-md-4 text-center">
              <img src={stick6} />
            <h3 className="titlebox">220+</h3>
            <p className="subtitleabout3">stores in 41 states</p>
          </div>
          <div className="col-md-4 text-center">
          <img src={stick7} />
            <h3 className="titlebox">25,000+</h3>
            <p className="subtitleabout3">Employees</p>
          </div>
          <div className="col-md-4 text-center">
          <img src={stick8} />
            <h3 className="titlebox">45,000+</h3>
            <p className="subtitleabout3">CarMax Certified cars</p>
          </div>
          <div className="col-md-4 text-center">
          <img src={stick9} />
            <h3 className="titlebox">9+ million</h3>
            <p className="subtitleabout3">cars sold</p>
          </div>
          <div className="col-md-4 text-center">
          <img src={stick10} />
            <h3 className="titlebox">33+ million</h3>
            <p className="subtitleabout3">cars appraised</p>
          </div>
          <div className="col-md-4 text-center">
          <img src={stick11} />
            <h3 className="titlebox">9 million</h3>
            <p className="subtitleabout3">cars purchased</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customabout3;
