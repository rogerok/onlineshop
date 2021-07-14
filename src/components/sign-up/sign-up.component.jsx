import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  auth,
  createUserProfileDocument,
} from "./../../firbase/firebase.utils";
import "./sign-up.style.scss";

const SignUp = () => {
  const [userData, setUserData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = userData;

    if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      await createUserProfileDocument(user, { displayName });
      setUserData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">sign up</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          id="name"
          label="name"
          value={userData.displayName || ""}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          id="password"
          label="password"
          value={userData.password || ""}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          id="confirmPassword"
          label="confirmPassword"
          value={userData.confirmPassword || ""}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="email"
          type="text"
          id="email"
          label="email"
          value={userData.email || ""}
          required
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};
export default SignUp;
