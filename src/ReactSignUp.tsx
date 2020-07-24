import React, { ChangeEvent } from "react";
import ReactDOM from "react-dom";
import './Form.css';

function ErrorMessage(props:any) {
    if (!props.valid) {
      return(
        <div className='error-msg'>{props.message}</div>
      )
    }
    return null;
  }

interface IState {
    email: string;
    formErrors: {
        email: string
    },
    emailValid: boolean
}

class ReactSignUp extends React.Component<IState> {
  public state: IState = {
    email: "",
    formErrors : {
        email: ""
    },
    emailValid: false
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({email: value});
    this.handleValidation(name, value);
  };

  handleValidation = (name: string, value: string) => {
    let fieldValidationErrors = this.state.formErrors;
    const emptyEmailField = value.length === 0 ? true : false;
    fieldValidationErrors.email = emptyEmailField ? 'email is required' : '';
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
    fieldValidationErrors.email = emailValid ? '' : 'Please enter an valid Email';
    this.setState({
        formErrors: fieldValidationErrors,
        emailValid: emailValid
    });
 };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({email: ""})
  };

  render() {

    return (
        <form onSubmit={ e => this.handleSubmit(e)}>
            <label htmlFor='email'>Email</label>
            <div className='form-group'>
              <input 
                type='email' 
                id='email' 
                name='email' 
                className='form-field'
                value={this.state.email} 
                onChange={(e) => this.handleChange(e)}/>

                <ErrorMessage valid={this.state.emailValid} message={this.state.formErrors.email} />
            </div>
            <div className='form-controls'>
              <button className='button' type='submit' disabled={!this.state.emailValid}>Sign up</button>
            </div>
        </form>
    );
  }
}

export default ReactSignUp;
