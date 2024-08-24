import { FormData } from '../types/FormData';
import { inputsData } from '../utils/inputsData';

export const validateField = (
    fieldName: keyof FormData,
    fieldValue: string
) => {
    const input = inputsData.find((input) => input.name === fieldName);
    if (!input) return null;

    const rules = input.rules;
    const trimmedValue = fieldValue.trim();

    if (rules?.isRequired && !trimmedValue) {
        return 'This is a required field!';
    }

    if (fieldName === 'userAge' && trimmedValue) {
        const age = Number(trimmedValue);
        if (
            (rules?.minAge && age < rules.minAge) ||
            (rules?.maxAge && age > rules.maxAge)
        ) {
            return 'Invalid age';
        }
    }

    if (fieldName === 'userEmail' && trimmedValue) {
        const mailPattern = /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!mailPattern.test(trimmedValue)) {
            return 'The email address must be valid.';
        }
    }

    if (
        trimmedValue &&
        rules?.minLength &&
        trimmedValue.length < rules.minLength
    ) {
        return `This field must be at least ${rules.minLength} characters long!`;
    }

    if (trimmedValue && fieldName !== 'userEmail' && fieldName !== 'userAge') {
        const textPattern = /^[a-zA-Z]+$/;
        if (!textPattern.test(trimmedValue)) {
            return 'Invalid input';
        }
    }

    return null;
};
