import React from "react";
import {useState} from 'react';
import "./Contact.css";
import Pexels from '../images/download.png'

export const Contact = () => {

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
        <div>
            <div className="contact5">
            <div className="c1">
                <h1>let communicate <br />tell us what you <br /> need</h1>
                <br />
                <h2>let try to get you what you need together</h2>
                <br />
                <br />
                <h3>email us at <br /> houserentalhouses65@gmail.com</h3>
                <br />
                <h3 className="ggg">contact us on this nomber <br />0846934458</h3>
            </div> 

            <div className="c2">
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


          
        </div>
    )
}