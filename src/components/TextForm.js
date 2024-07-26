import React, { useState } from 'react'

export default function TextForm(props) {
    function change(event) {
        setText(event.target.value);//change state
        console.log("State changed");
    }
    function convertToUpper() {
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success");
    }
    function convertToLower() {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase", "success");
    }
    function removeWhiteSpaces() {
        setText(text.replace(/\s+/g, ' ').trim());
        props.showAlert("Removed extra whitespaces", "success");
    }
    function readOut() {
        var msg = new
            SpeechSynthesisUtterance(text);
        speechSynthesis.speak(msg);
        props.showAlert("Text is read out", "success");
    }
    function clearText() {
        setText('');
        props.showAlert("Text has been cleared", "success");
    }
    const [text, setText] = useState('');
    const finalText=text.replace(/\s+/g, ' ').trim();
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3">
                    <textarea onChange={change} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white' }}></textarea>
                </div>
                <button className="btn btn-warning btn-outline-dark mx-2" onClick={convertToUpper}><b>Convert to uppercase</b></button>
                <button className="btn btn-warning btn-outline-dark mx-2" onClick={convertToLower}><b>Convert to lowercase</b></button>
                <button className="btn btn-warning btn-outline-dark mx-2" onClick={removeWhiteSpaces}><b>Remove extra whitespaces</b></button>
                <button className="btn btn-warning btn-outline-dark mx-2" onClick={clearText}><b>Clear Text</b></button>
                <button className="btn btn-warning btn-outline-dark mx-2" onClick={window.print}><b>Print</b></button>
                <button className="btn btn-warning btn-outline-dark mx-2" onClick={readOut}><b>Read aloud</b></button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text summary</h2>
                <p>{text.length} characters</p>
                <p>{finalText.length > 0 ? finalText.split(" ").length : 0} word(s)</p>           
                {/* <p>{finalText.split(" ").length * 0.008} minutes read</p> */}
                <h3>Preview</h3>
                <p>{finalText.length > 0 ? finalText : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
