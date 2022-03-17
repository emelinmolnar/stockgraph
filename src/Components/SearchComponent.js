import React from "react";

export default function SearchComponent(props) {
    return (
        <div>
            <div className='infoDiv'>
                <label htmlFor="inputBox" className = "header">Search For a Stock</label>
                <div className='searchDiv'>
                    <input name = "inputBox" id="inputBox" onChange={props.onChange} type="text"/>
                    <button id="button" onClick={props.onClick}>Search</button>
                </div>
            <h1>You'll be searching for: <span>{props.stockName}</span></h1>
            </div>
        </div>
    );
}