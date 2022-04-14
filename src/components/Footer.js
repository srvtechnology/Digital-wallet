import img from "../assets/img/header-footer/am2x-logo.png";

export default function Footer(){
    return(
        <div>
             <footer>
      <div className="max-theme-width">
        <div className="footer">
          <div className="left-content">
            {/* <img src="assets/img/header-footer/am2x-logo.png" alt=""/> */}
            <img src={img} alt=""/>
          </div>
          <div className="right-content">
            <i className="fal fa-comment-alt-dots"></i>
            <i className="fab fa-telegram-plane"></i>
            <p>© 2022 AM2x. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}