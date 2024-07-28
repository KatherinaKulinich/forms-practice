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
            additionalStyles='max-w-[500px]'
        >
            <div className='flex flex-col items-center gap-10'>
                <div className='flex flex-col items-center gap-2'>
                    <h1 className='text-lg font-bold uppercase text-violet-900'>
                        Thanks for filling out the form!
                    </h1>
                    <p className='text-sm font-bold uppercase text-violet-500'>
                        Check your data:
                    </p>
                </div>
                <div className='flex w-full flex-col gap-5'>
                    {Object.keys(formData).map((item, i) => (
                        <PersonalDataField
                            key={i}
                            fieldName={`${item.replace('user', '')}: `}
                            fieldData={formData[item as keyof FormData]}
                        />
                    ))}
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
                    additionalStyles='max-w-[250px]'
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
