import React from "react";
import "./Modal.css";
import CreateTag from '.CreateTag';

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Tag Creation Successful !!!!</h1>
        </div>
        <div>
      
        {values.map((value) => (
          <div className='card'>
            <h2>src={value.repoURL}</h2>
            <h3>{value.repoURL}</h3>
            <p>{value.repoURL}</p>
          </div>
        ))}
      </div>
    </div>
        
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Home
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Modal;