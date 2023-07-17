import * as yup from 'yup';

const LoginValidation = yup.object().shape({
    email: yup.string().email().required('Email is requied').trim(),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be less than 20 characters')
        .matches(/(?=.*[0-9])/, 'Password must contain a number')
});

const ResgisterValidation = yup.object().shape({
    email: yup.string().email().required('Email is requied').trim(),
    password: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be less than 20 characters')
        .matches(/(?=.*[0-9])/, 'Password must contain a number'),
    fullName: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be less than 20 characters')
        // .matches(/^[a-zA-Z]*$/, 'Full name must contain only letters'),
});

const UpdateProfileValidation = yup.object().shape({
    email: yup.string().email().required('Email is requied').trim(),
    fullName: yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password must be less than 20 characters'),
        // .matches(/^[a-zA-Z]*$/, 'Full name must contain only letters'),
    file: yup.mixed().nullable()
});


 
export {
    LoginValidation, 
    ResgisterValidation,
    UpdateProfileValidation
}