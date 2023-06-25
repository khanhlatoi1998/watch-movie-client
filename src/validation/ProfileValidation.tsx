import * as yup from 'yup';

const ProfileValidation = yup.object().shape({
    email: yup.string().email().required('Email is requied').trim(),
    fullName: yup.string()
        .required('fullName is required')
        .min(6, 'fullName must be at least 6 characters')
        .max(20, 'fullName must be less than 20 characters')
        .matches(/^[a-zA-Z]*$/, 'Full name must contain only letters'),
});
 
export {
    ProfileValidation
}