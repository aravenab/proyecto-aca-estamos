import React from 'react'

export default function Footer() {
  return (
    <footer className="container-fluid py-5 mt-3">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Páginas</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">¿Quiénes somos?</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contacto</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Contacto</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">+56 2 2685 6600</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">contacto@renca.cl</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label forHtml="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Ilustre Municipalidad de Renca </p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3 bi bi-twitter-x"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3 bi bi-instagram"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3 bi bi-facebook"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        <li className="ms-3 bi bi-youtube"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#youtube"></use></svg></a></li>
        
      </ul>
    </div>
  </footer>
  )
}
