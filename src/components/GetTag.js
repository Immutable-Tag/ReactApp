import React, { useState } from 'react';
import "./Form.css";
import Axios from 'axios'
import { middlewareURL } from '../Config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap'

function GetTag() {
  const [values, setValues] = useState({
    repoURL: "",
    tagID: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({
      title: "",
      repoURL: "",
      commitID: "",
      failureMessage: "",
      headerClassName: ""
    })
    const handleClose = () => setShow(false);

  function handleInputChange(e) {
    const newValue = {...values}
    newValue[e.target.id] = e.target.value
    setValues(newValue)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Axios.post(middlewareURL+values.tagID,{
    Axios.post(`${middlewareURL}/v1/tags/${values.tagID}`,{
      repo_url: values.repoURL
    })
    .then(res=>{
      console.log(res.data)
      setShow(true);
      setModalContent({
        title: "Successfully Retrieved Tag!",
        repoURL: res.data.repo_url,
        tagID: res.data.tag_id,
        commitID: res.data.commit_id,
        headerClassName: "success-modal-header"
      })
      setSubmitted(false);
      setValues({
        repoURL: "",
        tagID: ""
      });
    })
    .catch(err => {
      let status = err.response.status;
      let message = err.message;
      if (status === 404){
        message = "Tag does not exist!"
      }
      setShow(true);
      setModalContent({
        title: "Failed to Retrieve Tag!",
        failureMessage: message,
        headerClassName: "failure-modal-header"
      });
      setSubmitted(false);
      setValues({
        repoURL: "",
        tagID: ""
      });
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header class={modalContent.headerClassName}>
            <Modal.Title>{modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalContent.failureMessage ? 
              <p class="modal-body">{modalContent.failureMessage}</p> : 
              <div>
                <p class="modal-body"><b>Repository URL:</b> {modalContent.repoURL}</p>
                <p class="modal-body"><b>Tag ID:</b> {modalContent.tagID}</p>
                <p class="modal-body"><b>Commit Hash:</b> {modalContent.commitID}</p>
              </div>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Close</Button>
            {/* <Button variant="primary" onClick={handleClose}>Submit</Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  export default GetTag;