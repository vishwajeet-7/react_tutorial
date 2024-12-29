import React from 'react'
import CardTitle from './CardTitle';
import Label from './Label';
import Input from './Input';
import Button from './Button';
import Message from './Message';


const FormCompoent = ({formDetails,cardTitle,buttonDetails,messageDetails}) => {
  return (
    <form action="" className="w-50 mt-4 card shadow">
        <div className="card-header bg-primary">
          <CardTitle title={cardTitle} />
        </div>
        <div className="card-body">
          {formDetails.map((ele, idx) => {
            return (
              <div className="mb-3">
                <Label
                  title={ele.label.title}
                  propClassname={ele.label.propClassname}
                />
                <Input
                  propType={ele.input.propType}
                  propClassName={ele.input.propClassName}
                  propPlaceholder={ele.input.propPlaceholder}
                />
              </div>
            );
          })}
          <div className="mb-3">
            <Button title={buttonDetails.title} propClassName={buttonDetails.propClassName} />
          </div>
        </div>
        <div className="mb-3">
          <Message
            message={messageDetails.message}
            redirectLink={messageDetails.redirectLink}
            redirectComponentName={messageDetails.redirectComponentName}
          />
        </div>
      </form>
  )
}

export default FormCompoent
