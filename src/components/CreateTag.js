import React, { useState } from "react";
import "./Form.css";
import Axios from 'axios'
import { middlewareURL } from '../Config';
import Modal from "./Model";

function CreateTag(){
    const [values, setValues] = useState({
        repoURL: "",
        tagID: "",
        commitID: ""
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
        Axios.post(`${middlewareURL}/v1/tags`,{
          repo_url: values.repoURL,
          tag_id: values.tagID,
          commit_id: values.commitID
        })
        .then(res=>{
          console.log(res.data)
          setValues(res.data)
          Modal();
        })
        .catch(err=>{
          console.log(err.message)
        }) 
      }

        //.then(res => this.setState({items: res.data}))
        //.catch(err => { 
        //this.setState({errorMessage: err.message});
      //}

      // if (res.status==200){
      //    Modal();
      // }
      // else if (res.status==404){
      //    <h1>Error!...Tag Not Found</h1>
      // }
    
    return(
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
          <input
            onChange={(e) => handleInputChange(e)}
            value={values.commitID}
            id="commitID"
            class="form-field"
            type="text"
            placeholder="Commit Id"
            name="commitID"
          />
          {submitted && !values.commitID ? <span id="last-name-error">Please enter a Commit Id</span> : null}
          <button class="form-field" type="submit">
            Create a Tag
          </button>
        </form>
      </div>
    );
}

export default CreateTag;