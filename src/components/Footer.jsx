import React from 'react'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-center">
          <img  className="img-fluid" src="./img/logo.png" alt=""/>
        </div>
        <div className="row d-flex justify-content-between align-items-center gy-5">
          <div className="col-xl-4 col-12 text-center">
            <div className="stay">
              <h2>Stay Wild!</h2>
              <p className="pprrpp">Write your email</p>
              <div className="className"></div>
              <h4>Follow Us</h4>
            <div className="">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                
            </div>
              <img className="mb-3" src="./img/visa.png" alt="" />
              <img className="mb-3" src="./img/visa.png" alt="" />
              <img className="mb-3" src="./img/visa.png" alt="" />
              <img className="mb-3" src="./img/visa.png" alt="" />
              <p>Copyright 2021 Wild Souls <br/> Website by Big Horror + No Matter</p>
            </div>
          </div>
          <div className="col-xl-4 col-12 text-center ">
            <div className="product">
              <h3>Products</h3>
              <p>Sesame Βutter / Tahini</p>
              <p>Nut Butters</p>
              <p>Honey</p>
              <p>Marmalades</p>
              <p>Halva</p>
              <p>Dry Nuts</p>
              <p>Open Sesame</p>
              <p className="giftt">Gift Card</p>
              <h4>Contact</h4>
              <p>info@wildsouls.gr <br/>
                +30 210 3231 438</p>
            </div>
          </div>

          <div className="col-xl-4 col-12 text-center ">
            <div className="company">
              <h3 className="">Company</h3>
              <p>Who we are</p>
              <p>Our Wild Way</p>
              <p>Concept Store</p>
              <p>The Five Treasures</p>
              <p>Recipes</p>

              <h4 className="fw-bold">Help</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Cookies</p>
              <p>Payment Methods</p>
              <p>Shipping & Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
