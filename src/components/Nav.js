import img from "../assets/img/header-footer/am2x-logo.png";
import scanner from "../assets/img/header-footer/qr_code_scanner.jpg";
import $ from "jquery";
import {useEffect} from "react";
import { Link } from 'react-router-dom';

export default function Nav(){
 

    useEffect(()=>{
       // alert("j");
        $("#qrCode").click(function () {
            $("#target").toggle("slow");
        });

        $(document).mouseup(function(e)
         {
            var container = $("#qrCode");
            var container2 = $("#target");
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
               // console.log(11);  
                 //here the div within the container,  click will not work.. except that all click will work. 
                container2.hide();
            }
         });


         $("#bells").click(function () {
          $("#target2").toggle("slow");
        });

        $(document).mouseup(function(e)
        {
           var containe = $("#bells");
           var containe2 = $("#target2");
           // if the target of the click isn't the containe nor a descendant of the containe
           if (!containe.is(e.target) && containe.has(e.target).length === 0)
           {
              // console.log(11);  
                //here the div within the containe,  click will not work.. except that all click will work. 
               containe2.hide();
           }
        });

     },[]);
     
    return(
        <div>
      <header className="header">
      <div className="site-header-container max-theme-width">
        <div className="site-header-logo">
          <img src={img} alt="" />
        </div>

        <input
          type="checkbox"
          className="toggleSideMenu"
          id="toggleSideMenu"
          autocomplete="off"
        />
        <label for="toggleSideMenu" className="hamburger-icon">
          <div className="hamburger-menu-line diagonal-1"></div>
          <div className="hamburger-menu-line horizontal"></div>
          <div className="hamburger-menu-line diagonal-2"></div>
        </label>
      

        <div id="side-menu-container">
          <div className="header-left-content">
            <nav id="top-menu">
              <ul id="main-menu">
                <li className="main-menu-item"><Link to="/">Dashboard</Link></li>
                <li className="main-menu-item"><Link to="#">About Us</Link></li>
                <li className="main-menu-item"><Link to="/purchase">Purchase</Link></li>
              </ul>
            </nav>
          </div>
          <div className="header-right-content">
            <div className="dollor">
              <div className="dollor-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <a href="">2000 USDC</a>
            </div>
            <div className="bnb">
              <div className="bnb-icon">
                <i className="fas fa-code"></i>
              </div>
              <a href="">0 BNB</a>
            </div>
            <div className="wallet-drop">
              <div className="wallet-icon intro" id="qrCode">
                <i className="fas fa-wallet"></i>
              </div>
              <div id="target">
                <img
                  src={scanner}
                  alt=""
                />
                <p className="w-ad">Wallet address</p>
                <p>
                  456fsdf..... <br />
                  f34sdf6
                </p>
              </div>
            </div>
            <div className="bells">
              <div className="bells-icon" id="bells">
                <i className="fas fa-bell"></i>
              </div>
              <div id="target2">
                <div className="drop-main">
                  <div className="clm"></div>
                  <div className="clm-text">
                    <p>claim</p>
                    <h4>today at 8 am</h4>
                  </div>
                </div>
                <div className="drop-main">
                  <div className="clm"></div>
                  <div className="clm-text">
                    <p>joined</p>
                    <h4>today at 8 am</h4>
                  </div>
                </div>
                <div className="drop-main">
                  <div className="clm"></div>
                  <div className="clm-text">
                    <p>deposite</p>
                    <h4>today at 8 am</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-book-arrow">
              <div className="arrow-icon">
                <i className="fas fa-long-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
        </div>
    )
}