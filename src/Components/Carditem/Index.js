import "./Style.css";
import React from "react";



function Carditem() {
  return (
    <>
      <div className="container-fluid">
        <div className="carditem" style={{backgroundImage: `url("https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdmVyJTIwcGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")` }}>
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


