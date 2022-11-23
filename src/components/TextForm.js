
import React, {useState} from 'react'

function TextForm(props){
    const handelUpClick = ()=>{
        // console.log("uppercase was Clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)

        props.showAlert("UpperCase was Clicked", "UPPERCASE")
        // alert("yout Txt Submited ") 
        document.title = "UpperCase"
    }
    const handleOnchange = (event)=>{
        // console.log("On Chnages");
        setText(event.target.value);
    
    }
    const clearText = ()=>{
        props.showAlert("Text was Cleared", "cleared")
            let clearText = "";
        setText(clearText);
        document.title = "cleared";
    }
    const handellowerCaseClick = ()=>{
        let newText2 = text.toLocaleLowerCase();
        setText(newText2);
        props.showAlert("Text changed to lowrer Case", "Lowercase");
        document.title = "Lowercase";
    }
    const [text, setText] = useState("")
    return(
        <>
         
       <div className="container">
        <div className="row">
            <div className="col-md-12"> <h1>{props.heading}</h1>
            <div className="mb3">
        <textarea value={text}  cols="30" rows="10" id='myBox' onChange={handleOnchange} className='form-control'></textarea>

            </div>
            <button className='btn btn-primary  me-2 mt-2' onClick={handelUpClick}> Convert To UpperCase   </button>
            <button className='btn btn-primary mt-2' onClick={handellowerCaseClick}> Convert To LowerCase   </button>
            <button className='btn btn-primary mt-2 ms-2' onClick={clearText}> Clear Your Text   </button>
            </div>
        </div>
       </div>

       <div className="container my-3">
        <h1>Your Text Summmery </h1>
        <p>
             {text.split (" ").length} and  {text.length} characters
        </p>

        <p>
             {0.008 * text.split (" ").length}  minutts
        </p>
        <h2>Your Preview </h2>
        <p>
            {text.length>0?text:"Enter Your Text"}
        </p>
       </div>
        </>
    )
};

export default TextForm;