import React from 'react';
import { Formik,Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const validationSchema = Yup.object({
email: Yup
    .string()
    .required("Email Required")
    .email("Please enter an valid Email")
})

class FormikSignUp extends React.Component {

  render() {

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
        {({ isSubmitting, errors, isValid, dirty}) => (
            <Form>
            <label>
                Email
            </label>
            <div className='form-group'>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
            </div>
            <div className='form-controls'>
                <button type="submit" disabled={!dirty || !isValid || isSubmitting}>
                    Sign up
                </button>
            </div>
            </Form>
        )}
        </Formik>
    );
  }
}

export default FormikSignUp;
