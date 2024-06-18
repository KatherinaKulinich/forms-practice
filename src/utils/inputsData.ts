export const inputsData = [
    {
        type: 'text',
        name: 'userName',
        label: 'Enter your name',
        placeholder: 'name...'
    },
    {
        type: 'text',
        name: 'userSurname',
        label: 'Enter your surname',
        placeholder: 'surname...'
    },
    {
        type: 'date',
        name: 'userBirthday',
        label: 'Choose your birthday',
        placeholder: 'DD/MM/YYYY'
    },
    {
        type: 'mail',
        name: 'userMail',
        label: 'Enter your mail',
        placeholder: '@mail...'
    },
    {
        type: 'password',
        name: 'userPassword',
        label: 'Create password',
        placeholder: '******'
    }
];

export const initialValues = {
    userName: '',
    userSurname: '',
    userBirthday: '',
    userEmail: '',
    userPassword: ''
};
