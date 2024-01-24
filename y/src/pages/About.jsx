import React from "react";
import "./About.css";
import Pexels from '../images/download.png'
import Pexel from '../images/pot.jpg'
import go from '../images/kk.jpg'

export const About = () => {
    return(
        <>
        <div className="about">
          <div className="ab1">
            <h2>Welcome to house and rental houses </h2>
            <h2>that was formed in 2017 in polokwane and it was moved to jonhannesburg</h2>
            <h2>becouse of  business reoson that was affecting the business progress.</h2>
          </div>
          <div className="ab2">
            <img src={Pexel} alt="Pexel" height={400} width={550}/>
            <h2>We offer a good quality costumer service <br /> that goes everywhere a customer need it <br /> to be and also we know what our customer<br /> need and the need of our customer is a our<br /> priority for us and we sell good and affordable<br /> houses an rental house that are affodable and<br /> rooms so our houses can be made a home if<br /> the customer want it to be.</h2>  
          </div>
          <div className="ab3">
            <h2>Our rental houses are rented with defferrnt prices becouse of location and the house condition, the house rooms and the house space and that condition are the one that ditermine the price so don`t go around looking for a house get in touch and tell us what you want then we will get it for you fast.   </h2>
            <img src={go} alt="go" height={400} width={550}/>
          </div>
        </div>
        
        
        
        
        
        
        

        <div className="footer">
              <div className="f1">
                <img src={Pexels} alt="Pexels" width={50} height={50}/>
                <h2>House and rental houses</h2>
              </div>
              <div className="f2">
                <h2>24 marshall street jonhannesburg <br />0011196482 <br />houserentalhouses65@gmail.com</h2>
              </div>
          </div>
        </>
    )
}