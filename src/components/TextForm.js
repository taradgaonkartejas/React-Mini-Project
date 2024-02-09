import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    }

    const toUpperCase = () => {
        var uc = text.toUpperCase();
        setText(uc);
    }
    const toLowerCase = () => {
        var lc = text.toLowerCase();
        setText(lc);
    }
    const toCamelCase = () => {
        var lc = text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        setText(lc);
    }
    const clearText = () => {
        var lc = '';
        setText(lc);
    }
    return (
        <>
            
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
                <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <textarea className="form-control" value={text} onChange={handleChange} id="TextArea" rows={6} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button type="button" className="btn btn-primary me-md-2" onClick={toUpperCase} style={{backgroundColor: props.mode === 'dark' ? 'grey' : ''}}>TO UPPERCASE</button>
                <button type="button" className="btn btn-primary me-md-2" onClick={toLowerCase} style={{backgroundColor: props.mode === 'dark' ? 'grey' : ''}}>to lowercase</button>
                <button type="button" className="btn btn-primary me-md-2" onClick={toCamelCase} style={{backgroundColor: props.mode === 'dark' ? 'grey' : ''}}>to CamelCase</button>
                <button type="button" className="btn btn-secondary " onClick={clearText} >Clear</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Preview</h2>
                <p>{text==="" ? 0:  text.trim().split(/\s+/).length} words and {text.length} charactor</p>
                <hr />
                <p>{text.length>0 ? text: 'Enter your text to preview it...'}</p>
            </div>

        </>
    )
}
