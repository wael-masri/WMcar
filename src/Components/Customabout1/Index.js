import React from "react";
import "./Style.css";
import stick1 from "../../Images/stick1.svg";
import stick2 from "../../Images/stick2.svg";
import stick3 from "../../Images/stick3.svg";
import stick4 from "../../Images/stick4.svg";
import stick5 from "../../Images/stick5.svg";
const Customabout1 = () => {
  return (
    <div className="container_about">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="titleabout1">Who we are</h3>
          </div>
          <div className="col-md-6">
            <p className="textabout1">
              At CarMax, our commitment to innovation and iconic customer
              experiences have made us the nation’s largest retailer of used
              cars. As the original disruptor of the automotive industry, our
              “no-haggle” prices transformed car buying and selling from a
              stressful, dreaded event into the honest, straightforward
              experience all people deserve. We’ve been raising the bar on
              customer  experiences ever since.
            </p>
          </div>
          <div className="col-md-6">
            <p className="textabout1">
              Today, our customers have the ability to buy completely on their
              terms, whether that’s online, in the store, or using a seamless
              combination of both. Couple our flexibility with our
              industry-leading Love Your Car Guarantee (learn more), including
              24-hour test drives and 30-day returns (up to 1500 mi.), and today
              we’re delivering iconic car buying experiences unlike any you’ve
              seen before.
            </p>
          </div>
        </div>
        <div className="row divabout12">
          <div className="col-md-5 text-center">
            <div className="row">
              <div className="col-md-6 text-center">
                <img src={stick1} style={{ marginBottom: "20px" }} />
                <p className="pabout12">Love Your Car Guarantee</p>
              </div>
              <div className="col-md-6 text-center">
                <img src={stick2} />
                <p className="pabout12">30-day money-back (up to 1500 mi)</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="row">
              <div className="col-md-6 text-center">
                <img src={stick3} />
                <p className="pabout12">24-hour test drives</p>
              </div>
              <div className="col-md-6 text-center">
                <img src={stick4} />
                <p className="pabout12">Home delivery*</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <img src={stick5} />
            <p className="pabout12">Curbside pickup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customabout1;
