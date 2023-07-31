import * as yup from 'yup';

const ProfileValidation = yup.object().shape({
    email: yup.string().email().required('Email is requied').trim(),
    fullName: yup.string()
        .required('fullName is required')
        .min(6, 'fullName must be at least 6 characters')
        .max(20, 'fullName must be less than 20 characters')
        .matches(/^[a-zA-Z]*$/, 'Full name must contain only letters'),
});

const ChangePasswordValidation = yup.object().shape({
    oldPassword: yup.string().required('Previous Password is required').trim(),
    newPassword: yup.string().required('New Password is required').trim(),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'Passwords must match')
});

const AddCastValidation = yup.object().shape({
    nameCast: yup.string().required('Cast Name is required'),
    fileCast: yup.string().required('Image Cast is required')
})

export {
    ProfileValidation,
    ChangePasswordValidation,
    AddCastValidation
}