# Formik and Yup library

A React component for a signup form using Formik and Yup validation.

#### Hosted link  https://form-validation-cyan-chi.vercel.app


## Description

FormFormik is a React component designed to manage a user signup form. It utilizes Formik for form state management and validation, along with Yup for schema validation to ensure data integrity.

## Features

- Input fields for name, email, password, and confirm password.
- Real-time validation feedback with error messages.
- Submission handling with form reset upon successful submission.
- Responsive design with separate containers for form and visual content.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SanjayvVarma/Formic-and-Yup.git

   cd your-repository

   npm install 

   npm run dev


## Validation Logic

The validation schema is defined using Yup and checks the following:

* **Name**: Must be a string between 2 and 15 characters and is required.
* **Email**: Must be a valid email format, required, and must end with @gmail.com.
* **Password**: Must be at least 8 characters long and match a specific pattern.
* **Confirm Password**: Must match the password field.

# Code Overview

The main component `FormFormik` is structured to effectively handle user input for a registration form. Below are the key aspects of this component:

## State Management
- Utilizes **Formik** to manage form state, including the values of each input field, handling changes, and processing form submission.

## Input Fields
- Contains four input fields:
  - **Name**: Captures the user's full name.
  - **Email**: Captures the user's email address.
  - **Password**: Captures the user's password.
  - **Confirm Password**: Ensures the user re-enters their password for confirmation.
- Each input field has associated validation rules defined using **Yup**.

## Error Messages
- Implements conditional rendering for error messages:
  - Displays validation errors below each input field based on user interaction (touched state) and validation results.

## Submission Handling
- On successful form submission:
  - Logs the captured values to the console.
  - Resets the form fields for a fresh input state.

### Example Code Snippet
Here’s a brief code snippet highlighting the structure:

```javascript
const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, action) => {
        console.log(values); 
        action.resetForm();  
    }
});
