import React from 'react'

function Store() {
  return (
    <div className="store">
      <div className="container">
        <div className="row d-flex align-items-center gy-3">
          <div className="col-md-6 col-12">
            <div>
              <h1 className="display-1 fw-bold">
                The <br />
                Concept <br />
                Store
              </h1>
              <p className="prpp">
                We invite you to explore it, live it, and take photographs of
                it. But be careful, it is very addictive!
              </p>
              <button className="btn py-0 px-5 rounded-5 btn-dark text-white">
                DISCOVER MORE!
              </button>
            </div>
          </div>
          <div className="col-md-6 col-12 text-center">
            <div>
              <img className="img-fluid" src="./img/room.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
