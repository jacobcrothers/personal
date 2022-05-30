import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Giorgi Ebanoidze</h2>
        <p><a href="mailto:lighthouseofhope99@gmail.com">lighthouseofhope99@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I &apos;m a Senior Full Stack Expert with the following skills and technologies.
        With over 7 years of professional experience working for
        and with some of the biggest names in the industry,
        I &apos;ve gained a reputation as a universal problem solver who delivers high-quality,
        state-of-the-art solutions on time and budget. Please contact me to make your project
        successful. Looking forward to hearing your good news.
        Thank you.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Giorgi Ebanoidze</p>
    </section>
  </section>
);

export default SideBar;
