import React from 'react';
import { Link } from 'react-router-dom';

const UneteItem = ({ iconClass, title, link, description, delay }) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="icon-box">
        <div className="icon"><i className={iconClass}></i></div>
        <h4 className="title"><Link to={link}>{title}</Link></h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default UneteItem;
