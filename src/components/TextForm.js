import React ,{useState} from 'react';


export default function TextForm(props) {
    const[text,setText]=useState('Enter text Here...');
    const handleChange= (event)=>{
        setText(event.target.value);
    }

    const toUpperCase=()=>{
        var uc=text.toUpperCase();
        setText(uc);
    }
    const toLowerCase=()=>{
        var lc=text.toLowerCase();
        setText(lc);
    }
    const toCamelCase=()=>{
        var lc=text.toLowerCase().split(' ').map(w=>w.charAt(0).toUpperCase()+ w.slice(1)).join(' ');
        setText(lc);
    }
    const clearText=()=>{
        var lc='';
        setText(lc);
    }
    return (
        <>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="TextArea" rows={6}></textarea>
            </div>
            <button type="button" className="btn btn-primary me-md-2" onClick={toUpperCase}>TO UPPERCASE</button>
            <button type="button" className="btn btn-primary me-md-2" onClick={toLowerCase}>to lowercase</button>
            <button type="button" className="btn btn-primary me-md-2" onClick={toCamelCase}>to CamelCase</button>
            <button type="button" className="btn btn-secondary " onClick={clearText}>Clear</button>
            <div className="container my-3">
                <h2>Your Text Summery</h2>
            <p>{text.split(' ').length} words and {text.length} charactor</p>
            <hr />
            <p>{text}</p>
            </div>
            
        </>
    )
}
