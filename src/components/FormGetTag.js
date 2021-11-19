import React from 'react';
// import useForm from './useForm';
import {useState, useEffect} from 'react'
import './Form.css';

function FormGetTag(props) {
    console.log("before")
    // const { handleChange, values, handleSubmit } = useForm();
    // console.log("after")
    // const [values, setValues] = useState({
    //     repoURL: '',
    //     tagID: ''
    // })
    // // const [errors, setErrors] = useState({})
    // const [isSubmitting, setIsSubmitting] = useState(false)

    // function handleChange(e) {
    //     const {name, value} = e.target
    //     setValues({
    //         ...values,
    //         [name]: value 
    //     })
    // } 

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('You clicked submit.');
    // }

    // const [html, setHtml] = useState(null);

    // function renderGetTagForm() {
        
    // }

    // return (
    //     <div className="form-content-right">
    //         <form className="form" 
    //      //    onSubmit={handleSubmit}
    //          >
    //              <h1>Retrieve a tag by filling out the information below</h1>
    //              <div className="form-inputs">
    //                  <label htmlFor="repoURL" className="form-label">
    //                      Repository URL
    //                  </label>
    //                  <input 
    //                      id="repoURL"
    //                      type="text" 
    //                      name="repoURL" 
    //                      className="form-input"
    //                      placeholder="Enter the Repository URL"
    //                      // value={values.repoURL}
    //                      // onChange={handleChange}
    //                      />
    //              </div>
    //              <div className="form-inputs">
    //                  <label htmlFor="tagID" className="form-label">
    //                      Tag name
    //                  </label>
    //                  <input 
    //                      id="tagID"
    //                      type="text" 
    //                      name="tagID" 
    //                      className="form-input"
    //                      placeholder="Enter the Tag name"
    //                      // value={values.tagID}
    //                      // onChange={handleChange}
    //                      />
    //              </div>
    //              <div>
    //                  <button className="form-input-btn" type="submit">
    //                      Get tag
    //                  </button>
    //              </div>
    //         </form>
    //     </div>
    //  );
    
    const [html, setHtml] = useState(null);

    function renderHtml () {
        return(
            <div>
                <h1>I want this to render on click</h1>
            </div>
        )
    }


    return (
        <div>
            {html}
            <button onClick={(() => setHtml(renderHtml()))}>Render Input forms</button>
        </div>
    )
};

export default FormGetTag;