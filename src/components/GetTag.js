import React from "react";
import "./Form.css";

export default function getTag() {
    return (
      <div class="form-container">
        <form class="register-form">
          {/* Uncomment the next line to show the success message */}
          {/* <div class="success-message">Success! Thank you for registering</div> */}
          <input
            id="repoURL"
            class="form-field"
            type="text"
            placeholder="Respository URL"
            name="repoURL"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="first-name-error">Please enter a first name</span> */}
          <input
            id="tagID"
            class="form-field"
            type="text"
            placeholder="Tag name"
            name="tagID"
          />
          {/* Uncomment the next line to show the error message */}
          {/* <span id="last-name-error">Please enter a last name</span> */}
          {/* Uncomment the next line to show the error message */}
          {/* <span id="email-error">Please enter an email address</span> */}
          <button class="form-field" type="submit">
            Retrieve a Tag
          </button>
        </form>
      </div>
    );
  }