import ComponentTitle from '../ComponentTitle/ComponentTitle'

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiLink } from "react-icons/ci";

import './Contact.css'
import ContactInfo from '../Common/ContactInfo';
import Form from '../Form/Form';

function Contact() {
  return (
    <section className="contact-me">
      <ComponentTitle title="Map Location" />
      <div className="map-outer">
        <div className="map-image">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.47635252867!2d76.825266117386!3d28.42280384586071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1752922529078!5m2!1sen!2sin"></iframe>
        </div>
      </div>

      <div className="title-seprater">
        <ComponentTitle title="Contact Info" />
      </div>
      <div className="contact-info">
        <ContactInfo icon={<FiPhoneCall />} value="7838957053" />
        <ContactInfo icon={<MdOutlineMarkEmailUnread />} value="irfanoptimistic@gmail.com" />
      </div>

      <div className="title-seprater">
        <ComponentTitle title="Send Me an Email" />
      </div>

      <div className="form">
        <Form />
      </div>
    </section>
  )
}

export default Contact