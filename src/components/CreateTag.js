import React, { useState } from "react";
import "./Form.css";
import Axios from 'axios'
import { middlewareURL } from '../Config';

function CreateTag(){
    const [values, setValues] = useState({
        repoURL: "",
        tagID: "",
        commitID: "",
        githubToken: ""
      });

    const [submitted, setSubmitted] = useState(false);
  
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState({
      message: "",
      class: ""
    })

    function handleInputChange(e) {
        const newValue = {...values}
        newValue[e.target.id] = e.target.value
        setValues(newValue)
      }

      function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        Axios.post(`${middlewareURL}/v1/tags`,{
          repo_url: values.repoURL,
          tag_id: values.tagID,
          commit_id: values.commitID,
          github_token: values.githubToken
        })
        .then(res=>{
          console.log(res.data);
          setToastMessage(
            {
              message: "Successfully Created Tag!",
              class: "success-message"
            }
          )
          setSubmitted(false);
          setValues({
            repoURL: "",
            tagID: "",
            commitID: "",
            githubToken: ""
          });
          setShowToast(true);
        })
        .catch(err=>{
          console.log(err.response.data)
          setToastMessage(
            {
              message: err.response.data.error,
              class: "failure-message"
            }
          )
          setSubmitted(false);
          // setValues({
          //   repoURL: "",
          //   tagID: "",
          //   commitID: ""
          // });
          setShowToast(true);
        }) 
      }

    return(
        <div class="form-container">
          <form class="tag-form" onSubmit={(e) => handleSubmit(e)}>
            {showToast ? 
              <div class={toastMessage.class}>{toastMessage.message}</div> :
                null
            }
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
            <input
              onChange={(e) => handleInputChange(e)}
              value={values.commitID}
              id="commitID"
              class="form-field"
              type="text"
              placeholder="Commit ID"
              name="commitID"
            />
            {submitted && !values.commitID ? <span id="last-name-error">Please enter a Commit Id</span> : null}
            <input
              onChange={(e) => handleInputChange(e)}
              value={values.githubToken}
              id="githubToken"
              class="form-field"
              type="text"
              placeholder="GitHub Token (optional)"
              name="githubToken"
            />
            <button class="form-field" type="submit">
              Create a Tag
            </button>
          </form>
      </div>
    );
}

export default CreateTag;