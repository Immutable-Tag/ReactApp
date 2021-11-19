import React, { useState } from 'react';
import "./Form.css";

function GetTag() {
  const [values, setValues] = useState({
    repoURL: "",
    tagID: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleRepoURLInputChange = (event) => {
    setValues({...values, repoURL:event.target.value})
  }

  const handleTagIDInputChange = (event) => {
    setValues({...values, tagID:event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

    return (
      <div class="form-container">
        <form class="tag-form" onSubmit={handleSubmit}>
          <input
          onChange={handleRepoURLInputChange}
            value={values.repoURL}
            id="repoURL"
            class="form-field"
            type="text"
            placeholder="Repository URL"
            name="repoURL"
          />
          {submitted && !values.repoURL ? <span id="repoURL-error">Please enter a repository URL</span> : null}
          <input
            onChange={handleTagIDInputChange}
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