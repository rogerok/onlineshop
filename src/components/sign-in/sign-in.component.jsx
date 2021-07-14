import React, { useState, useReducer } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "./../../firbase/firebase.utils";
import "./sign-in.style.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await auth.signInWithEmailAndPassword(formData.email, formData.password);
      console.log(formData);
      setFormData({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => setSubmitting(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
