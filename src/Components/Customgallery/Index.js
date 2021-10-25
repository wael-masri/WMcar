import { ClosedCaption } from "@mui/icons-material";
import React, { useState } from "react";
import "./Style.css";
const Customgallery = () => {
  const data = [
    {
      id: 1,
      imgsrc:
        "https://imgv3.fotor.com/images/homepage-feature-card/Fotor-AI-photo-enhancement-tool.jpg",
    },
    {
      id: 2,
      imgsrc:
        "https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      imgsrc:
        "https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      id: 4,
      imgsrc: "https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg",
    },
    {
      id: 5,
      imgsrc:
        "https://storage.googleapis.com/yk-cdn/photos/plp/mina-mimbu/rainbow.jpg",
    },
    {
      id: 6,
      imgsrc:
        "https://orgaphenix.com/wp-content/uploads/2020/01/secrets-photo-profil-linkedin.jpeg",
    },
    {
      id: 7,
      imgsrc:
        "https://www.bigstockphoto.com/images/homepage/collections2020/module-4.jpg",
    },
  ];

  

  return (
    <>
     
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
             
            >
               <a data-fancybox='gallery' href={item.imgsrc}>
              <img src={item.imgsrc} style={{ width: "100%" }} />
              </a>
            </div>
          );
        })}
      </div>
    </>
  )
};

export default Customgallery;
