import { FormData, FormErrors } from '../types/FormData';
import { inputsData } from '../utils/inputsData';

export const validateValues = (data: FormData) => {
    const isRequiredMessage = 'This this required field!';

    const errors: FormErrors = {
        userName: null,
        userSurname: null,
        userCity: null,
        userCountry: null,
        userEmail: null,
        userAge: null
    };

    inputsData.forEach((input) => {
        for (const dataItem in data) {
            const value: string = data[dataItem as keyof FormData];
            const isRequired = input?.rules?.isRequired;

            if (dataItem === input.name) {
                if (dataItem === 'userAge') {
                    const { minAge } = input?.rules || null;
                    const { maxAge } = input?.rules || null;
                    const { message } = input?.rules || null;

                    if (minAge && maxAge) {
                        if (Number(value) < minAge || Number(value) > maxAge) {
                            errors.userAge = message;
                        }
                    }
                } else {
                    const { minLength } = input?.rules || null;
                    const { message } = input?.rules || null;
                    const truncatedValue = value.trim();

                    if (minLength && truncatedValue.length < minLength) {
                        errors[dataItem as keyof FormData] = message;
                    }

                    if (dataItem === 'userEmail') {
                        const mailCondition =
                            /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

                        if (truncatedValue.match(mailCondition)) return;
                        errors[dataItem as keyof FormData] =
                            'The email address must be valid and contain special characters.';
                    } else {
                        const textCondition = /^[a-zA-Z]+$/;
                        if (value.match(textCondition)) return;
                        errors[dataItem as keyof FormData] = message;
                    }
                }

                if (isRequired && !value) {
                    errors[dataItem as keyof FormData] = isRequiredMessage;
                }
            }
        }
    });

    return errors;
};
