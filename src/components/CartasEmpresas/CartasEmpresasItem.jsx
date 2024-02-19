import React from 'react';

const CartasEmpresasItem = ({ imgSrc, title, category, clase}) => (
  <div className={`col-lg-4 col-md-6 portfolio-item ${clase}`}>
    <div className="portfolio-wrap">
      <img src={imgSrc} className="img-fluid" alt="" />
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
      <div className="portfolio-links">
        <a href={imgSrc} data-gallery="portfolioGallery" className="portfolio-lightbox" title={title}><i className="bx bx-plus"></i></a>
        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
      </div>
    </div>
  </div>
);

export default CartasEmpresasItem;
