import React from 'react'
import { useFormik } from 'formik';
import validationSchema from '../yup/validationSchema';

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: ""
}

const FormFormik = () => {

    const allFormField = () => {
        return (values.name && values.email && values.password && values.cpassword);
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm()
        }
    })
    console.log(errors);

    return (
        <>
            <div className="container">
                <div className="main-container">
                    <div className="left-container">
                        <h1 className="title-name">Welcome!</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-container">
                                <label htmlFor="name" className="input-label">NAME</label>
                                <input
                                    type="name"
                                    autoComplete="off"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name ? < p className='input-error'>{errors.name}</p> : null}
                            </div>
                            <div className="input-container">
                                <label htmlFor="email" className="input-label"> EMAIL </label>
                                <input
                                    type="email"
                                    autoComplete="off"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email ? < p className='input-error'>{errors.email}</p> : null}
                            </div>
                            <div className="input-container">
                                <label htmlFor="password" className="input-label">PASSWORD</label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? < p className='input-error'>{errors.password}</p> : null}
                            </div>
                            <div className="input-container">
                                <label htmlFor="cpassword" className="input-label">CONFIRM PASSWORD</label>
                                <input
                                    type="password"
                                    autoComplete="off"
                                    name="cpassword"
                                    id="cpassword"
                                    placeholder="Confirm Password"
                                    value={values.cpassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.cpassword && touched.cpassword ? < p className='input-error'>{errors.cpassword}</p> : null}
                            </div>
                            <div className='btnDiv'>
                                <button disabled={!allFormField()} className="submit-button" type="submit">SIGN UP</button>
                            </div>
                        </form>
                    </div>
                    <div className="right-container">
                        <img
                            src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                    </div>
                </div >
            </div >
        </>
    )
}

export default FormFormik;