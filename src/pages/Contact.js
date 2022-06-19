import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Giorgi Ebanoidze via email @ lighthouseofhope99@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Email: lighthouseofhope99@gmail.com</p>
        <p>Skype: live:.cid.311c485d1d73469</p>
        <p>Phone Number: +1 541 701 9880</p>
        <p>Linked In: https://www.linkedin.com/in/giorgi-ebanoidze-98089b241</p>
        <p>Github: https://github.com/giorgiebanoidze25</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
