import React from "react";
import "./Services.css";
import Pexels from '../images/download.png'
import froms from '../images/kk.jpg'
import fro from '../images/yy.jpg'
import fr from '../images/jpg.jpg'
import frs from '../images/pp.jpg'
import frms from '../images/kk.jpg'
import why from '../images/why.jpg'
import { NavLink } from "react-router-dom";

export const Services = () => {
    return(
        <>
        <div className="imag1">
          <div>
           <div className="froms">
            <img src={froms} alt="froms" height={400} width={400}/>
            <br />
            A house for sale that have 6 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="/Contact">
                 Get in touch
              </NavLink>
              </button>
            <br />
            <br /> 
            </div> 
           <div className="fro">
            <img src={fro} alt="fro" height={400} width={400}/>
            <br />
            A rental house that have 4 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="/Contact">
                 Get in touch
              </NavLink>
              </button>
            <br />
            <br />
           </div>
           </div>

           <div>
           <div className="fr">
            <img src={fr} alt="fr" height={400} width={400}/>
            <br />
            A house for sale that have 8 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="/Contact">
                 Get in touch
              </NavLink>
              </button>
            <br />
            <br />
           </div>
           <div className="frs">
            <img src={frs} alt="frs" height={400} width={400}/>
            <br />
            A rental room that have 3 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="/Contact">
                 Get in touch
              </NavLink>
              </button>
            <br />
            <br />
           </div>
           
           </div>

           <div>
           <div className="frms">
            <img src={frms} alt="frms" height={400} width={400}/>
            <br />
            A house for sale that have 5 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="/Contact">
                 Get in touch
              </NavLink>
              </button>
            <br />
            <br />
           </div>
           <div>
           <div className="why">
           <img src={why} alt="why"  height={400} width={400}/>
            <br />
            A house for sale that have 6 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="/Contact">
                 Get in touch
              </NavLink>
              </button>
           <br />
            <br />
           </div>
           </div>
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