import { InputsData } from '../types/FormData';

export const inputsData: Array<InputsData> = [
    {
        type: 'text',
        name: 'userName',
        label: 'Enter your name',
        placeholder: 'name...',
        rules: {
            minLength: 3,
            isRequired: true
        }
    },
    {
        type: 'text',
        name: 'userSurname',
        label: 'Enter your surname',
        placeholder: 'surname...',
        rules: {
            minLength: 3,
            isRequired: true
        }
    },
    {
        type: 'text',
        name: 'userCity',
        label: 'Enter your city',
        placeholder: 'city...',
        rules: {
            minLength: 3,
            isRequired: true
        }
    },
    {
        type: 'text',
        name: 'userCountry',
        label: 'Enter your country',
        placeholder: 'country...',
        rules: {
            minLength: 3,
            isRequired: true
        }
    },
    {
        type: 'mail',
        name: 'userEmail',
        label: 'Enter your mail',
        placeholder: '@mail...',
        rules: {
            minLength: 12,
            isRequired: true
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
            isRequired: true
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
