import React from "react";

const ValidationError = () => {
    return(
        <div className="par d-flex justify-content-center">
            <div className="card check">
                <div className="card-body">
                    <h4 className="card-title" style={{color:'red'}}>Error!</h4>
                    <h6 className="card-subtitle">Word must be an alphabet</h6>
                </div>
            </div>
        </div>
    )
}
export default ValidationError;