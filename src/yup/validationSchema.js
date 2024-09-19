import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2)
        .max(15)
        .required("Enter your full name"),

    email: Yup.string()
        .email("Invalid email format")
        .required("Enter your email")
        .matches(/@gmail\.com$/, "Email must end with @gmail.com"),
        // .matches(/sanjay@gmail\.com$/, "Email must be sanjay@gmail.com"),

    password: Yup.string()
        .min(8)
        .required("Enter your password")
        .matches(/rishiME@199$/, "Password must be start from r__M_9"),  

    cpassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
})

export default validationSchema;