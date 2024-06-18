import { useState } from 'react';
import { FormData } from '../../types/FormData';
import Button from '../Button';
import PersonalDataField from '../PersonalDataField';
import Modal from './Modal';

interface ModalFormIsFinishedProps {
    isVisible: boolean;
    formData: FormData;
    onClose: () => void;
}

const ModalFormIsFinished: React.FC<ModalFormIsFinishedProps> = ({
    isVisible,
    formData,
    onClose
}) => {
    const { userName, userSurname, userEmail, userBirthday } = formData;
    const [isNestedModalVisible, setIsNestedModalVisible] = useState(false);

    const onSavePDFData = () => {
        setIsNestedModalVisible(true);
        setTimeout(() => {
            setIsNestedModalVisible(false);
        }, 1000);
    };

    const onCloseNestedModal = () => {
        setIsNestedModalVisible(false);
    };

    return (
        <Modal
            isVisible={isVisible}
            onClose={onClose}
        >
            <div className='flex flex-col items-center gap-10'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-lg uppercase text-sky-700'>
                        Thanks for filling out the form!
                    </h1>
                    <p className='text-sm text-sky-700/50'>Check your data:</p>
                </div>
                <div className='flex w-full flex-col gap-5'>
                    <PersonalDataField
                        fieldName='Name:'
                        fieldData={userName}
                    />
                    <PersonalDataField
                        fieldName='Surname:'
                        fieldData={userSurname}
                    />
                    <PersonalDataField
                        fieldName='Birthday:'
                        fieldData={userBirthday}
                    />
                    <PersonalDataField
                        fieldName='Mail:'
                        fieldData={userEmail}
                    />
                </div>
                <Button
                    type='button'
                    option='regular'
                    buttonText='Save data as PDF'
                    onClick={onSavePDFData}
                />
                <Modal
                    isVisible={isNestedModalVisible}
                    onClose={onCloseNestedModal}
                >
                    <div className='text-lg font-semibold uppercase text-sky-600'>
                        Saved!
                    </div>
                </Modal>
            </div>
        </Modal>
    );
};

export default ModalFormIsFinished;
