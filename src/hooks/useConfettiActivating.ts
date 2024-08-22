import { useState } from 'react';
import { FormErrors } from '../types/FormData';

export const useConfettiActivating = () => {
    const [isConfetti, setIsConfetti] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFormFinished = () => {
        setIsConfetti(false);
        setIsModalVisible(true);
    };

    const getConfettiEffect = (errors: FormErrors) => {
        const isErrorAbsence = checkErrors(errors);

        if (isErrorAbsence) {
            setIsConfetti(true);
        }
    };

    const checkErrors = (errors: FormErrors) => {
        return Object.values(errors).every((key) => key === null);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return {
        isConfetti,
        isModalVisible,
        onFormFinished,
        getConfettiEffect,
        checkErrors,
        closeModal
    };
};
