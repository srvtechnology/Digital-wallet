import { useEffect, useState } from "react";
import '../assets/css/main.css';
import '../assets/css/style.css';
import Nav from "./Nav";
import Footer from "./Footer";

export default function Index(){
	return(
		<>
		<Nav />
	
    

    <div className="referrals">
      <h4 className="heading">My Buddy Referral Link</h4>
      <div className="links-div">
        <div className="link">
          <p id="link">https://fontawesome.com/v5</p>
        </div>
        <div className="copy-btns" onclick="copyToClipboard('#link')">
          <i className="fas fa-copy"></i>
        </div>
        <div className="share-btns">
          <i className="fas fa-share-alt"></i>
        </div>
      </div>
    </div>









    <div className="details max-theme-width">
      <div className="detail">
        <div className="left-content">
          <div className="logo-div">
            <div className="logo">
              <img src="../abc/assets/img/details/details-logo.png" alt="" />
            </div>
            <p>ID 888</p>
          </div>
          <div className="copy-url">
            <p id="url">https://fontawesome.com</p>
            <i className="fas fa-copy" onclick="copyToClipboard2('#url')"></i>
          </div>
          <div className="timing">
            <p>joined yesterday at 12:00 am</p>
            <p>By ID 222</p>
          </div>
          <div className="star-icon">
            <div className="star"><i className="fas fa-star"></i></div>
            <div className="star"><i className="fas fa-star"></i></div>
            <div className="star"><i className="fas fa-star"></i></div>
            <div className="star"><i className="fas fa-star"></i></div>
            <div className="star"><i className="fas fa-star"></i></div>
            <div className="star"><i className="fas fa-star"></i></div>
          </div>
        </div>
        <div className="middle-content">
          <div className="profit">
            <p>Profits</p>
            <h4>88.88 USDC</h4>
          </div>
          <div className="team">
            <p>Buddy Team</p>
            <h4>0</h4>
          </div>
          <div className="deposite">
            <p>Deposite</p>
            <h4>200 USDC</h4>
          </div>
        </div>
        <div className="right-content">
          <div className="direct">
            <p>Direct Buddy</p>
            <h4>0</h4>
          </div>
          <div className="bonus">
            <p>Bonus</p>
            <h4>0 USDC</h4>
          </div>
          <div className="climbed">
            <p>Climbed</p>
            <h4>88.88 USDC</h4>
          </div>
        </div>
      </div>
    </div>






    <div className="total-incomes max-theme-width">
      <div className="incomes">
        <div className="income">
          <div className="left-content">
            <div className="incm">
              <p>Members Total</p>
              <h4>1341</h4>
            </div>
            <div className="incm">
              <p>Transaction Made</p>
              <h4>17027</h4>
            </div>
          </div>
          <div className="right-content">
            <div className="incm">
              <p>Members Received USDC</p>
              <h4>1,2565,255,102</h4>
            </div>
            <div className="incm">
              <p>Tournover</p>
              <h4>254,254,2554 USDC</h4>
            </div>
          </div>
        </div>
        <div className="pool-contact">
          <p className="text">AM2x Pool Contact:</p>
          <div className="url2">
            <p id="url2">https://am2x.com/home.html</p>
          </div>
          <i className="fas fa-copy" onclick="copyToClipboard3('#url2')"></i>
          <i className="fas fa-link"></i>
        </div>
      </div>
    </div>











    <div className="recent-activety max-theme-width">
      <div className="ledger">
        <div className="left-content">
          <h4 className="heading">AM2x Ledger</h4>
          <div className="claim">
            <div className="amnt">
              <div>
                <h4>200 USDC</h4>
                <p>deposite</p>
                <h4>0 USDC</h4>
                <p>Payout</p>
                <h4>0 USDC</h4>
                <p>Allocated</p>
              </div>
            </div>
            <div className="btns-div">
              <a href="" className="btns">Claim</a>
            </div>
          </div>
          <div className="validate">
            <div className="circle-line">
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <p>Price: 200 USDC</p>
            <p>Units: 2</p>
            <p>Amount: 400 USDC</p>
            <div className="btns-div">
              <a href="" className="btns">Validate</a>
            </div>
          </div>
        </div>
        <div className="right-content">
          <h4 className="heading">this is right content</h4>
          <div className="table">
            <table>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
              <tr>
                <td className="table-name">
                  <div></div>
                  Bonous
                </td>
                <td className="table-id">ID 217</td>
                <td className="table-amnt">20195 USDC</td>
                <td className="table-time">2 minutes ago</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

   
   

   <Footer />

		</>
		)
}