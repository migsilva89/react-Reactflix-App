import React from 'react';

function Footer() {
  const today = new Date();
  const date = today.getFullYear();

  return <div className="footer">ReactFlix | All rights reserved © {date}</div>;
}

export default Footer;
