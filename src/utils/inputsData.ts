import { InputsData } from '../types/FormData';

export const inputsData: Array<InputsData> = [
    {
        type: 'text',
        name: 'userName',
        label: 'Enter your name',
        placeholder: 'name...',
        rules: {
            minLength: 3,
            isRequired: true,
            message: 'Invalid name'
        }
    },
    {
        type: 'text',
        name: 'userSurname',
        label: 'Enter your surname',
        placeholder: 'surname...',
        rules: {
            minLength: 3,
            isRequired: true,
            message: 'Invalid surname'
        }
    },
    {
        type: 'text',
        name: 'userCity',
        label: 'Enter your city',
        placeholder: 'city...',
        rules: {
            minLength: 3,
            isRequired: true,
            message: 'Invalid city name'
        }
    },
    {
        type: 'text',
        name: 'userCountry',
        label: 'Enter your country',
        placeholder: 'country...',
        rules: {
            minLength: 3,
            isRequired: true,
            message: 'Invalid country name'
        }
    },

    {
        type: 'mail',
        name: 'userEmail',
        label: 'Enter your mail',
        placeholder: '@mail...',
        rules: {
            minLength: 12,
            isRequired: true,
            message:
                'The email address must be valid and contain special characters.'
        }
    },
    {
        type: 'number',
        name: 'userAge',
        label: 'Enter your age',
        placeholder: 'age...',
        rules: {
            minAge: 12,
            maxAge: 110,
            isRequired: true,
            message: 'Invalid age'
        }
    }
];

export const initialValues = {
    userName: '',
    userSurname: '',
    userCity: '',
    userCountry: '',
    userEmail: '',
    userAge: ''
};
