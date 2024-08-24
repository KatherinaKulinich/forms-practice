import { FormData } from '../types/FormData';
import { inputsData } from '../utils/inputsData';

export const validateField = (
    fieldName: keyof FormData,
    fieldValue: string
) => {
    const errors: Partial<FormData> = {};
    const input = inputsData.find((input) => input.name === fieldName);
    const value = fieldValue.trim();
    const rules = input?.rules;
    const isRequiredMessage = 'This this a required field!';

    if (!input) return errors;

    if (rules?.isRequired && !value) {
        errors[fieldName] = isRequiredMessage;
        return;
    }

    if (fieldName === 'userAge' && value) {
        const age = Number(value);

        if (
            (rules?.minAge && age < rules.minAge) ||
            (rules?.maxAge && age > rules.maxAge)
        ) {
            errors.userAge = rules?.message;
        }
        return;
    }

    if (fieldName === 'userEmail' && value) {
        const mailPattern = /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!mailPattern.test(value)) {
            errors.userEmail = rules?.message;
        }
        return;
    }

    if (value && rules?.minLength && value.length < rules?.minLength) {
        errors[fieldName] =
            `This field must be at least ${rules?.minLength} characters long!`;

        return;
    }

    if (value && input.name !== 'userEmail' && input.name !== 'userAge') {
        const textPattern = /^[a-zA-Z]+$/;

        if (!textPattern.test(value)) {
            errors[fieldName] = rules?.message;
        }
    }

    return errors;
};
