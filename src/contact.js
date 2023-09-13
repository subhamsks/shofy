import React, { useState } from 'react'
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { loginWithRedirect } = useAuth0();
    // const { logout } = useAuth0();
    const {  isAuthenticated} = useAuth0();

    const [users, setUser] = useState(
        {
            Name: '',
            Email: '',
            Contact: '',
            Subject: '',        
            Message: '',
        }
    )
    let name, value
    const data = (e) => 
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
    const senddata = async(e) =>
    {
        const {Name, Email, Contact, Subject, Message} = users 
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Contact, Subject, Message
            })
        }
        const res = await fetch('https://shofy-09-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res)

        if(res)
        {
            alert("Message Sent")
        }
        else
        {
            alert("An error occured")
        }
    }
  return (
    <>
        <div className="contact_container">
            <div className="contant">
                <h2> # Contact Us</h2>
                <div className="form">
                    <form method='POST'>
                        <input type="text" name="Name" value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
                        
                        <input type="email" name="Email" value={users.Email} placeholder='Enter Your E-mail address' required autoComplete='off' onChange={data}></input>
                        
                        <input type="text" name="Contact" value={users.Contact} placeholder='Enter Your Contact Number' required autoComplete='off' onChange={data}></input>
                        
                        <input type="text" name="Subject" value={users.Subject} placeholder='Type your Subject' required autoComplete='off' onChange={data}></input>

                        <textarea name="Message" value={users.Message} placeholder='Your Message' onChange={data} ></textarea>

                        {
                            isAuthenticated ? 
                            <button type='Submit' onClick={senddata}>Submit</button>
                            :
                            <button type='Submit' onClick={() => loginWithRedirect()}>Login First</button>
                            
                        }
                        
                    </form>
                </div>
            </div>
        </div>
    </>

  )
}

export default Contact