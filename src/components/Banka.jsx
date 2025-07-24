import React from 'react'

function Banka() {
  return (
    <div className="banka">
      <div className="container">
        <div className="row text-center">
          <div className="col-xl-4">
            <div className="bankaa">
              <img className="img-fluid " src="./img/banka.png" alt="" />
              <h3 className="mm fw-bold">
                The Wild Peanut <br />
                Butter
              </h3>
              <span className="fw-bold">€ 4,90</span>
              <button
                className="button btn py-2 px-5 rounded-5 btn-outline-primary mt-5 mb-5"
              >
                Buy Now!
              </button>
            </div>
          </div>

          <div className="col-xl-4 mbb">
            <div className="bankaa">
              <img className="img-fluid mt-5" src="./img/banka.png" alt="" />
              <h3 className="mm fw-bold">
                The Wild Peanut <br />
                Butter
              </h3>
              <span className="fw-bold">€ 4,90</span>
              <button
                className="button btn py-2 px-5 rounded-5 btn-outline-primary mt-5"
              >
                Buy Now!
              </button>
            </div>
          </div>

          <div className="col-xl-4 col-12">
            <div className="bankaa">
              <img className="img-fluid" src="./img/banka.png" alt="" />
              <h3 className="mm fw-bold">
                The Wild Peanut <br />
                Butter
              </h3>
              <span className="fw-bold">€ 4,90</span>
              <button
                className="button btn py-2 px-5 rounded-5 btn-outline-primary mt-5"
              >
                Buy Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banka
