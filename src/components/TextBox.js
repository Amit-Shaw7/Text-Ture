import React from 'react'
import { useState } from 'react'

function TextBox(props) {
    
    const handleUpper = () => {
        setText(text.toUpperCase())
    }
    const handleLower = () => {
        setText(text.toLowerCase())
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.setAlertProp("Text Copied" , "Succes")
    }
    const handleClear = () => {

        setText("")
    }
    const hanndleChange = (e) => {
        setText(e)
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container mt-4 mb-2">
                <h2 className='my-2'>Enter Your Text Below :- </h2>
                <div className="form-floating">
                    <textarea className="form-control" value={text} 
                    onChange={(e) => { hanndleChange(e.target.value) }} placeholder="Leave a comment here" id="floatingTextarea2" 
                    style={{ backgroundColor : `${props.mode === "light" ? "white" : "#042743"}` , 
                    height: "250px", border: `1px solid ${props.mode === "light" ? "black" : "white"}` , 
                    color:`${props.mode === "light" ? "black" : "white"}` }}>
                    </textarea>

                    <label htmlFor="floatingTextarea2"></label>
                </div>
            </div>
            <div className="buttons container">
                <button onClick={handleUpper} className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} mx-1 my-1`}>Convert To Upper</button>
                <button onClick={handleLower} className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} mx-1 my-1`}>Convert To Lower</button>
                <button onClick={handleCopy}  className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} mx-1 my-1`}>Copy</button>
                <button onClick={handleClear} className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"} mx-1 my-1`}>Clear</button>
            </div>
            <div className='container'>
                <h3 className='my-3'>Your Text Summary :</h3>
                <p>Total Words : {text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length} , Character Count : {text.length}</p>
                <p>To read {text.split(/\s+/).filter((elem)=>{return elem.length !== 0}).length * 0.008} minutes</p>
                <h3>Preview : </h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextBox

// Total Words : 0 , Character Count : 0