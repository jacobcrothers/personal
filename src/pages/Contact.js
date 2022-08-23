import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Jacob Crothers via email @ jacobcrothers425@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Email: jacobcrothers425@gmail.com</p>
        <p>Skype: live:.cid.311c485d1d73469</p>
        <p>Phone Number: +1 541 701 9880</p>
        <p>Linked In: https://www.linkedin.com/in/giorgi-ebanoidze-074b69246</p>
        <p>Github: https://github.com/jacobcrothers</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
