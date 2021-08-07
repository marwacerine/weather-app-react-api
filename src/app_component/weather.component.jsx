import React from 'react';
import "./weather.style.css";

const Weather = (props) => {
    
    return (
        <div className="container" id="weathercard">
            <div className="head">
                <h1>{props.city}</h1> 
                <h1 className="date">{props.date}</h1>
            </div>
            <div className="cards pt-4">
                <h5 className="py-4">
                    <i className={`wi ${props.weathericon} display-1`} />
                </h5>
                {props.celsius ? <h1 className="py-2" id="temperature">{props.celsius}&deg;</h1> : null}

                {minmaxTemp(props.temp_min,props.temp_max)}
                
            </div>
            <div className="desc">
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    )
}

function minmaxTemp(min,max) {
    if(min && max){
    return(
        <h3>
            <span className="px-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg> {min}&deg;</span>
            <span className="px-4"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>{max}&deg;</span>
        </h3>
    )}
}

export default Weather;
