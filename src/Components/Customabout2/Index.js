import React from "react";
import './Style.css';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import about1 from "../../Images/about1.jpg";
import about2 from "../../Images/about2.jpg";
const Customabout2 = () => {
  return (
    <div className="container containerdivabout2">
      <div className="row ">
        <div className="col-md-12 text-center">
          <h3 className="bigtitleabout2" >What matters to us</h3>
        </div>
      </div>
      <div className="row divabout2">
        <div className="col-md-6 div1aboput2">
          {" "}
          <h2 className="h3about2">Above all, we care about people.</h2>
        </div>
        <div className="col-md-6 div2aboput2">
          <h4 className="h4coreabout2">Our core values</h4>
          <ul>
            <li className="liabout2"><GppGoodIcon/>  Do the right thing</li>
            <li className="liabout2"><SupervisorAccountIcon/>  Put people first</li>
            <li className="liabout2"><CheckCircleOutlineIcon/>  Win together</li>
            <li className="liabout2"><FilterHdrIcon/>  Go for greatness</li>
          </ul>
        </div>
      </div>
      <div className="row bigdivabout2">
        <div className="col-md-6 divimgabout2">
          {" "}
          <img src={about1} style={{width:'100%'}} />
        </div>
        <div className="col-md-6">
          <h3>Our associates</h3>
          <p className="textabout2">
            Our success is possible because of the hard work and dedication of
            our 25,000+ associates nationwide.  If you join our team, you’ll
            join a culture of transparency, integrity, and an unwavering focus
            on doing what’s right for each other, our customers, and our
            communities. We’re committed to helping you innovate, learn, grow,
            and shape your career in ways you haven’t even imagined.
          </p>
        </div>
      </div>

      <div className="row bigdivabout2">
        <div className="col-md-6">
          <h3>Our associates</h3>
          <p className="textabout2">
            Our success is possible because of the hard work and dedication of
            our 25,000+ associates nationwide.  If you join our team, you’ll
            join a culture of transparency, integrity, and an unwavering focus
            on doing what’s right for each other, our customers, and our
            communities. We’re committed to helping you innovate, learn, grow,
            and shape your career in ways you haven’t even imagined.
          </p>
        </div>
        <div className="col-md-6 divimgabout2">
          <img src={about2} style={{width:'100%'}} />
        </div>
      </div>
    </div>
  );
};

export default Customabout2;
