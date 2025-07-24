import React from 'react'

function Halva() {
  return (
    <div className="halva">
     <div className="container-fluid">
       <div className="row">
         <div className="col-sm-6 col-12 havla-text">
           <div className="halva-text">
             <h1 className="display-1 fw-bold">Wild Halva</h1>
             <h6 className="display-6 fw-bold">A magical seed..</h6>
             <p className="prrp">
               It is neither a dessert nor a snack nor a proper meal. It is,
               though, all these simultaneously. It is what you want it to be.
             </p>
             <p>500G | FROM 8,90€</p>
             <button className="buton btn py-0 px-5 rounded-5 btn-dark text-white">
               DISCOVER MORE!
             </button>
             <img
               className="img-fluid imgg d-xxl-flex d-none offset-3"
               src="./img/halva-img.png"
               alt=""
             />
           </div>
         </div>
         <div className="col-sm-6 col-12 qool">
           <div className="d-flex flex-column align-items-center">
             <img className="" src="./img/qoll.png" alt="" />
             <h2>
               Spread your Love <br />
               with a Wild Gift!
             </h2>
             <button className="btn py-3 px-5 btn-dark text-white rounded-5">
               DISCOVER THEM NOW!
             </button>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default Halva
