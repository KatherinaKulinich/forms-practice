import { createRef } from 'react';

const inputNameRef = createRef<HTMLInputElement>();
const inputSurnameRef = createRef<HTMLInputElement>();
const inputCityRef = createRef<HTMLInputElement>();
const inputCountryRef = createRef<HTMLInputElement>();
const inputEmailRef = createRef<HTMLInputElement>();
const inputAgeRef = createRef<HTMLInputElement>();

export const inputsRefs = [
    { input: 'userName', ref: inputNameRef },
    { input: 'userSurname', ref: inputSurnameRef },
    { input: 'userCity', ref: inputCityRef },
    { input: 'userCountry', ref: inputCountryRef },
    { input: 'userMail', ref: inputEmailRef },
    { input: 'userAge', ref: inputAgeRef }
];
