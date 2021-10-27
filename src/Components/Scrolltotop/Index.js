import React from 'react'
import './Style.css';
import $ from 'jquery';
import NorthIcon from '@mui/icons-material/North';
const Scrolltotop = () => {
   
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 500) {
          $('.divscrollbutton').fadeIn();
        } else {
          $('.divscrollbutton').fadeOut();
        }
      });



    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };
   
   
   
   
   
   
   
   
    return (
      
        <div className="divscrollbutton" onClick={scrollTop}>
            <NorthIcon style={{color:'#fff'}}/>
        </div>
       
    )
}

export default Scrolltotop;
