import React from "react";
import { Link } from "react-router-dom";
import FormCompoent from "../ReUsableComponents/FormCompoent";


const LoginPage = () => {
  const formDetails = [
    {
      label: {
        title: "Email Address",
        propClassname: "form-label",
      },
      input: {
        propType: "email",
        propClassName: "form-control",
        propPlaceholder: "Enter your email address",
      },
    },
    {
      label: {
        title: "Password",
        propClassname: "form-label",
      },
      input: {
        propType: "text",
        propClassName: "form-control",
        propPlaceholder: "Enter your password",
      },
    },
  ];
  const cardTitle = "Login Form"
  const buttonDetails = {
    title:"Login",
    propClassName:"btn btn-primary"
  }

  const messageDetails = {
    message:"If not a user, then please",
    redirectLink:"/signUp",
    redirectComponentName:"Sign Up"
  }
  return (
    <div className="d-flex justify-content-center mt-4">
      <FormCompoent formDetails={formDetails} cardTitle={cardTitle} buttonDetails={buttonDetails} messageDetails={messageDetails}/>
    </div>
  );
};

export default LoginPage;
