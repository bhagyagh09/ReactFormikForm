import * as React from 'react';
import './App.css';
import ReactSignUp from './ReactSignUp';
import FormikSignUp from './FormikSignUp';
import Header from './Header';

class App extends React.Component {
  public render() {
    const formErrors = {email: ""};
    return (
      <div className="App">
        <div className="form-container">
          <header className="App-header">
            <Header name="React" />
          </header>
          <div className="form-content">
            <ReactSignUp 
            email={"abc"}
            emailValid={false}
            formErrors={formErrors}/>
          </div>
        </div>
        <div className="form-container">
          <header className="App-header">
            <Header name="Formik" />
          </header>
          <div className="form-content">
            <FormikSignUp/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;