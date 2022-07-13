import React from 'react'
import "./crm.css"
const Crm = (props) => {
  return (
    <>
    
    <div className="col-md-4 text-left mt-3">
      <div className="card" >
        <img src={props.src} className="card-img-top"  alt="cardimg" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.para}
          </p>         
        </div>
      </div>
      </div>
      
    </>
  );
}

export default Crm