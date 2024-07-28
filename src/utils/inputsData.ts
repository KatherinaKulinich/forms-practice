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
            message:
                'The name must be at least 3 letters long and must not contain numbers or other symbols.'
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
            message:
                'Surname must be at least 3 letters long and must not contain numbers or other symbols.'
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
            message:
                'City must be at least 3 letters long and must not contain numbers or other symbols.'
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
            message:
                'Country must be at least 3 letters long and must not contain numbers or other symbols.'
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
            message: 'Invalid email'
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
            message: 'Invalid value'
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
