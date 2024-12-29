import React from 'react'
import FormCompoent from '../ReUsableComponents/FormCompoent';

const SignUp = () => {
    const formDetails = [
        {
            label: {
              title: "Name",
              propClassname: "form-label",
            },
            input: {
              propType: "text",
              propClassName: "form-control",
              propPlaceholder: "Enter your Name",
            },
          },
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
      const cardTitle = "Sign up Form"
      const buttonDetails = {
        title:"Sign up",
        propClassName:"btn btn-success"
      }
    
      const messageDetails = {
        message:"If already a user, then please",
        redirectLink:"/login",
        redirectComponentName:"Login"
      }
  return (
    <div className='d-flex justify-content-center mt-4'>
      <FormCompoent formDetails={formDetails} cardTitle={cardTitle} buttonDetails={buttonDetails} messageDetails={messageDetails}/>
    </div>
  )
}

export default SignUp
