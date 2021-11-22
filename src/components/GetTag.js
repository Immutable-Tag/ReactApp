import React, { useState } from 'react';
import "./Form.css";
import Axios from 'axios'

function GetTag() {
  const url = ""

  const [values, setValues] = useState({
    repoURL: "",
    tagID: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(e) {
    const newValue = {...values}
    newValue[e.target.id] = e.target.value
    setValues(newValue)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    Axios.post(url+values.tagID,{
      repoURL: values.repoURL
    })
    .then(res=>{
      console.log(res.data)
    })
  }

    return (
      <div class="form-container">
        <form class="tag-form" onSubmit={(e) => handleSubmit(e)}>
          <input
          onChange={(e) => handleInputChange(e)}
            value={values.repoURL}
            id="repoURL"
            class="form-field"
            type="text"
            placeholder="Repository URL"
            name="repoURL"
          />
          {submitted && !values.repoURL ? <span id="repoURL-error">Please enter a repository URL</span> : null}
          <input
            onChange={(e) => handleInputChange(e)}
            value={values.tagID}
            id="tagID"
            class="form-field"
            type="text"
            placeholder="Tag name"
            name="tagID"
          />
          {submitted && !values.tagID ? <span id="last-name-error">Please enter a tag name</span> : null}
          <button class="form-field" type="submit">
            Retrieve a Tag
          </button>
        </form>
      </div>
    );
  }

  export default GetTag;