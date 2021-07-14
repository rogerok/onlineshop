import React, { useState, useReducer } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "./../../firbase/firebase.utils";
import "./sign-in.style.scss";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const SignIn = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => setSubmitting(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      name: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I have already an account</h2>
      <form className="" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          id="email"
          label="email"
          value={formData.email || ""}
          required
          handleChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          id="password"
          label="password"
          value={formData.password || ""}
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleButton>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
