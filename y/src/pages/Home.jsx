import React from "react";
import {useState} from 'react';
import image from "../images/why.jpg"
import "./Home.css";
import { NavLink } from "react-router-dom";
import text from "../images/pot.jpg"
import tex from "../images/mara.jpg"
import texs from "../images/johns.jpg"
import texts from "../images/john.jpg"
import Pexels from '../images/download.png'

export const Home = () => {

    const [name,setName]=useState('')
    const [surname,setSurname]=useState('')
    const [email,setEmail]=useState('')
    const [date,setDate]=useState('')
    const [course,setCourse]=useState('')
    const [data,setData]=useState(null)

  

    const handleSubmit =(e)=>{
        e.preventDefault();
        const formDat={
            name,
            surname,
            email,
            date,
            course,
        }
    setData(formDat)
    };


    return(
        <>
        <div className="mainhome">
            <div className="home1"> 
            <h2>
                Welcome to houses and rental
                <br/> houses that can be made
                <br/> a home for your 
                <br/> family and 
                <br/>yourself.
            </h2>
            </div>
            <div className="home2">
                <img src={image} alt="image" height={330} width={550} />
            </div>
        </div>
        <div className="log">
            <h2>
                we make a home for those who are up for having a
                <br/> home with their family and their loved ones.
            </h2>
        </div>
        <div className="button1">
            <div>
            <button>
                <NavLink to="Contact">Get in touch</NavLink>
            </button>
            </div>
            <div>
            <button className="N">
                <NavLink to="Services">view our services</NavLink>
            </button>
            </div>
        </div>

        <div className="achivement">
            <div className="A">
                <h2>
                    ACHIEVEMENT
                </h2>
            </div>
            <div className="AB">
            <div>
                <h2>happy clients</h2>
                <br /><br />
                <button>85%</button>
            </div>
            <div>
                <h2>services we offer</h2>
                <br /><br />
                <button>100%</button>
            </div>
            <div>
                <h2>properties we offer</h2>
                <br />
                <br />
                <button>93%</button>
            </div>
            </div>
            <div className="ABC">
            <button>
            <NavLink to="Comments">
                View our comments
            </NavLink>
            </button>
            </div>
        </div>


        <div className="abouts">
            <div className="about1">
                <button>
                <NavLink to="About">
                    view more about us
                </NavLink>   
                </button>
                <br />
                <br />
                <br />
                <h2>
                    The hauses and rental house it was formed in 2017 in polokwane and it was moved to jonhannesburg becouse the of business.
                    <br />
                    <br />
                    <br />
                    We offer a good quality costumer service that goes everywhere a customer need it to be and also we know the need of our customer and sell good and affordable houses an rent affodable rooms and houses that can be made a home.  
                </h2>
            </div>
            <div>
                <img src={text} alt="text" height={480} width={600}/>
            </div>
        </div>

        <div className="services">
            <div className="services1">
                <img src={tex} alt="tex" height={300} width={200}/>
                <br />
                <br />
            A house for sale that have <br /> 2 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="Contact">
                 Get in touch
              </NavLink>
              </button>
            </div>
            <div className="services2">
                <button>
                    <NavLink to="Contact">
                        Get in touch
                    </NavLink>
                </button>
                <button>
                    <NavLink to="Services">
                        view more of our
                        <br /> product
                    </NavLink>
                </button>
                <img src={texs} alt="texs" height={300} />
                <br />
            A house for sale that have 8 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="Contact">
                 Get in touch
              </NavLink>
              </button>
            </div>
            <div className="services3">
                <img src={texts} alt="texts"  height={300} width={200}/>
                <br />
                <br />
            A  rental room that have <br /> 3 room excluding bath rooms
            <br />
            if interested
            <br />
            <button>
              <NavLink to="Contact">
                 Get in touch
              </NavLink>
              </button>
            </div>
        </div>



        <div className="contact">
            <div className="contact1">
                <h1>Let communicate <br />tell us what you <br /> need</h1>
                <br />
                <h2>let try to get you what you need together</h2>
                <br />
                <br />
                <h3>email us at <br /> houserentalhouses65@gmail.com</h3>
                <br />
                <h3 className="ggg">contact us on this nomber <br />0846934458</h3>
            </div>
            <div className="contact2">
            <form onSubmit={handleSubmit}>
        <input type='text' value={name} placeholder='  Enter name'
         onChange={(e)=>setName(e.target.value)} className='hhgg'/>
         <br></br>
         <br></br>
         <input type='text' value={surname} placeholder='  Enter surname'
         onChange={(e)=>setSurname(e.target.value)} className='hhgg'/>
          <br></br>
         <br></br>
         <input type='email' value={email} placeholder='  Enter email'
         onChange={(e)=>setEmail(e.target.value)} className='hhgg'/>
          <br></br>
         <br></br>
         <input type='text' value={date} placeholder='  Enter your contact'
         onChange={(e)=>setDate(e.target.value)} className='hhgg'/>
          <br></br>
         <br></br>
         <input type='text' value={course} placeholder='  How can we be of help'
         onChange={(e)=>setCourse(e.target.value)} className='hhgg'/>
          <br></br>
         <br></br>
        <button type='submit'>submit</button>
            </form>
            {data !== null && (
                <div>
                    <h1>submited</h1>
                    <pre>{JSON.stringify(data,null,2)}</pre>
                </div>
        

            )}
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