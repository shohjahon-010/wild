import React from 'react'

function Nut() {
  return (
    <div className="nut">

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 nut-text d-flex align-items-center">
          <div className="">
            <h1 className="display-1 fw-bold">
              Wild like a <br />
              Nut??
            </h1>
            <h3 className="mt-5 display-6 fw-bold">
              Roasted <br />
              Almond
            </h3>
            <p className="mt-2 mb-3 fw-bold prp">
              All the treasures are hidden in a <br />
              chest. Respectively, our <br />
              treasures are enclosed in their <br />
              Wild shell.
            </p>
            <p>250G | 5,00€</p>
            <p className="btn py-0 px-5 btn-dark text-white">TASTE IT!</p>
          </div>
          <div>
            <img className="d-xl-flex d-none" src="./img/nut-img.png" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="offset-3">
            <h5 className="display-10 mb-5 mt-5">
              DISCOVER OUR <br />
              PRODUCTS THROUGH THE <br />
              5 TREASURES OF NATURE!
            </h5>
            <h4 className="fw-bold display-6 mt-5">Sesame</h4>
            <div className="div"></div>
      
            <h4 className="fw-bold display-6 mt-5">Peanut</h4>
            <div className="div"></div>
      
            <h4 className="fw-bold display-6 mt-5">Almond</h4>
            <div className="div"></div>
      
            <h4 className="fw-bold display-6 mt-5">Hazelnut</h4>
            <div className="div"></div>
      
            <h4 className="fw-bold display-6 mt-5">Cashew</h4>
            <div className="div"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Nut
