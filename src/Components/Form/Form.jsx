import { useState } from 'react';
import { toast } from 'react-toastify';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const FormHandle = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !company || !subject || !message) {
      if (!name) toast.error('Please enter your Name');
      if (!email) toast.error('Please enter your Email');
      if (!company) toast.error('Please enter your Company');
      if (!subject) toast.error('Please enter your Subject');
      if (!message) toast.error('Please enter your Message');
      return;
    }

    // Send using Formspree
    const formData = {
      name,
      email,
      company,
      subject,
      message,
    };

    try {
      const response = await fetch('https://formspree.io/f/xdkdaojj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been sent!');
        // Clear fields
        setName('');
        setEmail('');
        setCompany('');
        setSubject('');
        setMessage('');
      } else {
        toast.error('Failed to send. Try again later.');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="form-section">
      <form onSubmit={FormHandle}>
        <div className="inputs">
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            autoComplete="off"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="message-box">
          <textarea
            name="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="send-message">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
