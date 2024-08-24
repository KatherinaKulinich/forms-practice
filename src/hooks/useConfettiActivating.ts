import { useState } from 'react';
import { FormData } from '../types/FormData';

export const useConfettiActivating = () => {
    const [isConfetti, setIsConfetti] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFormFinished = () => {
        setIsConfetti(false);
        setIsModalVisible(true);
    };

    const getConfettiEffect = (errors: Partial<FormData>) => {
        const isErrorAbsence = checkErrors(errors);

        if (isErrorAbsence) {
            setIsConfetti(true);
        }
    };

    const checkErrors = (errors: Partial<FormData>) => {
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
