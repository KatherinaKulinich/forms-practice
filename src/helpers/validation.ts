import { FormData, FormErrors } from '../types/FormData';
import { inputsData } from '../utils/inputsData';

export const validateValues = (data: FormData) => {
    const isRequiredMessage = 'This this a required field!';

    const errors: FormErrors = {
        userName: null,
        userSurname: null,
        userCity: null,
        userCountry: null,
        userEmail: null,
        userAge: null
    };

    inputsData.forEach((input) => {
        const inputName = input.name as keyof FormData;
        const value = data[inputName]?.trim() || '';
        const rules = input.rules;

        if (rules?.isRequired && !value) {
            errors[inputName] = isRequiredMessage;
        }

        if (input.name === 'userAge' && value) {
            const age = Number(value);

            if (
                (rules?.minAge && age < rules.minAge) ||
                (rules?.maxAge && age > rules.maxAge)
            ) {
                errors.userAge = rules?.message;
            }
            return;
        }

        if (input.name === 'userEmail' && value) {
            const mailPattern =
                /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

            if (!mailPattern.test(value)) {
                errors.userEmail = rules.message;
            }
            return;
        }

        if (value && rules?.minLength && value.length < rules?.minLength) {
            errors[inputName] =
                `This field must be at least ${rules?.minLength} characters long!`;

            return;
        }

        if (value && input.name !== 'userEmail' && input.name !== 'userAge') {
            const textPattern = /^[a-zA-Z]+$/;

            if (!textPattern.test(value)) {
                errors[inputName] = rules?.message;
            }
        }
    });

    return errors;
};
