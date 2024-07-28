export interface FormData {
    userName: string;
    userSurname: string;
    userCity: string;
    userCountry: string;
    userEmail: string;
    userAge: string;
}

export interface FormErrors {
    userName: string | null;
    userSurname: string | null;
    userCity: string | null;
    userCountry: string | null;
    userEmail: string | null;
    userAge: string | null;
}

export interface InputsData {
    type: string;
    name: string;
    label: string;
    placeholder: string;
    rules: Rules;
}

export interface Rules {
    minLength?: number;
    isRequired: boolean;
    message: string;
    maxAge?: number;
    minAge?: number;
}
