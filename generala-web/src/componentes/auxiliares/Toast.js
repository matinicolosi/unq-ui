import React from 'react'

const Toast = ({ visible, children }) => {
    return (
      visible ? 
      <div className="row justify-content-center">
        <div className="col-md-auto">
          <div className="alert alert-warning" role="alert">
            {children}
          </div>
        </div>
      </div> : <></>
    );
} 

export default Toast
