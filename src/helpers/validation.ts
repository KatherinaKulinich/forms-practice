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

            if (dataItem === 'userAge' && dataItem === input.name) {
                const min = input?.rules?.minAge;
                const max = input?.rules?.maxAge;

                if (min && max) {
                    if (+value < min || +value > max) {
                        errors.userAge = input.rules.message;
                    }
                }
            }

            if (dataItem === input.name && dataItem !== 'userAge') {
                const { minLength } = input?.rules || null;

                if (minLength && value.length < minLength) {
                    errors[dataItem as keyof FormData] = input.rules.message;
                }
            }
            if (isRequired && !value) {
                errors[dataItem as keyof FormData] = isRequiredMessage;
            }
        }
    });

    return errors;
};
