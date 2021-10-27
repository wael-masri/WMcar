import React from 'react'
import './Style.css';
const Cardteam = ({card,lastname,fistname,partposition1,partposition2}) => {
   var imageclass = "";
  if(card === "1"){
    var imageclass = "back-side1";
  }else if(card === "2"){
    var imageclass = "back-side2";
  }else{
    var imageclass = "back-side3";
  }
  
  
  
  return (
      
       
          <div className="card2">
            <div className="sides left-side">
            <h3 className="titleteam1">{fistname}</h3>
            <h4 className="titleteam2">{partposition1}</h4>
            </div>
            <div className="sides right-side">
            <h3 className="titleteam1">{lastname}</h3>
            <h4 className="titleteam2">{partposition2}</h4>
            </div>
            <div className={imageclass}></div>
          </div>
        
        
    )
}

export default Cardteam
