import React from 'react'

function Love() {
  return (
    <div className="love">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6 col-12 text-center">
          <div>
            <h1 className="display-3 fw-bold">
              The Five <br />
              Treasures
            </h1>
            <p className="ppr">
              As Hippocrates said, we are what we eat. Let’s see what happens
              by eating these <br/> WILD treasures.
            </p>
            <button className="btn py-0 px-4 btn-dark text-white rounded-5">
              DISCOVER THEM NOW!
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12 text-center">
          <div>
            <img className="img-fluid" src="./img/love-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Love
