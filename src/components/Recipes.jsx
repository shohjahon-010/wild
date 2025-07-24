import React from 'react'

function Recipes() {
  return (
    <div className="recipes">
      <div className="container">
        <div className="text-center mb-5">
          <h1>Wild Recipes</h1>
          <p className="pprr">
            Take a look at the keyhole of our Wild kitchen! Get ideas on how to
            <br />
            turn your own kitchen into a Wild.
          </p>
        </div>
        <div className="row ">
          <div className="col-xxl-4 col-12 text-center ">
            <div className="cole">
              <img className="img-fluid mb-5" src="./img/cole.png" alt="" />
              <span className="mt-5">Salty</span>
              <h3 className="mt-3">Coleslaw with High Fibre Tahini</h3>
            </div>
          </div>
          <div className="col-xxl-4 col-12 text-center">
  
              <div className="cole">
                <img className="img-fluid mb-5" src="./img/hummus.png" alt="" />
                <span className="mt-5">Salty</span>
                <h3 className="mt-3">Wild Hummus</h3>
              </div>
          </div>

          <div className="col-xxl-4  text-center">
              <div className="cole">
                <img className="img-fluid mb-5" src="./img/granola.png" alt="" />
                <span className="mt-5">Salty</span>
                <h3 className="mt-3">Wild 6 Ingredient Granola</h3>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Recipes
