import React from 'react'

const Footer = () => {
  return (
    <div>
       <section className="">
  {/* Footer */}
  <footer className="text-center text-white" style={{ backgroundColor: '#4287f5' }}>
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: CTA */}
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button data-mdb-ripple-init type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
      {/* Section: CTA */}
    </div>
    {/* Grid container */}

    {/* Copyright */}
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2024 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">Gymmer.in</a>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</section>

      
    </div>
  )
}

export default Footer
