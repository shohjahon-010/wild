import React from 'react'

function WildWay() {
  return (
    <div className="wild-way">
      <div className="container">
        <div className="row d-flex align-items-center gy-4">
          <div className="col-lg-6 col-12 d-flex justify-content-center">
            <div>
              <h2 className="display-1 fw-bold">
                Our <br />
                Wild Way
              </h2>
              <p className="mt-3 mb-5 prr">
                Our philosophy is present in every stage of our production. We
                are endeavoring to contribute <br/> to the creation of a better world.
              </p>
              <button className="btn py-0 px-5 rounded-5 btn-dark text-white">
                DISCOVER MORE!
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12 d-flex justify-content-center">
            <div>
              <img className="img-fluid" src="./img/wild.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WildWay
