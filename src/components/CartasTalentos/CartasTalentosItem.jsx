import React from 'react'

export default function CartasTalentosItem({nombre_Talento, trabajo_Talento, imgSrc}) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="member" data-aos="zoom-in">
                <div className="pic"><img src={imgSrc} className="img-fluid" alt="" /></div>
                <div className="member-info">
                    <h4>{nombre_Talento}</h4>
                    <span>{trabajo_Talento}</span>
                    {/*<div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
    </div>*/}
                </div>
            </div>
        </div>
    )
}
