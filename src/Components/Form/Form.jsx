import { useState } from 'react'
import { toast } from 'react-toastify';

import './Form.css'

function Form() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    // forStyle state variables 

    const FormHandle = (e) => {
        e.preventDefault()

        if (name === '') {
            toast.error('Your Name')
        }
        if (email === '') {
            toast.error('Your Email')
        }
        if (company === '') {
            toast.error('Your Company')
        }
        if (subject === '') {
            toast.error('Your Subject')
        }
        if (message === '') {
            toast.error('Your Message')
        }
        else {
            toast.success('Your Message Submited')
            setName('')
            setEmail('')
            setCompany('')
            setSubject('')
            setMessage('')
        }
    }

  return (
    <div className="form-section">
        <form>
            <div className="inputs">
                <input 
                    type="text" 
                    placeholder='Name' 
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <input 
                    type="email" 
                    placeholder='Email' 
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input 
                    type="text" 
                    placeholder='Company' 
                    autoComplete="off"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)} />

                <input 
                    type="text" 
                    placeholder='Subject' 
                    autoComplete="off"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="message-box">
                <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button className='send-message' onClick={FormHandle}>Send Message</button>
        </form>
    </div>
  )
}

export default Form