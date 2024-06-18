import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { FormData } from '../types/FormData';
import Button from './Button';
import PersonalDataField from './PersonalDataField';

interface ModalProps {
    isVisible: boolean;
    formData: FormData;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, formData, onClose }) => {
    const { userName, userSurname, userEmail, userBirthday } = formData;

    return createPortal(
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className='fixed inset-0 z-10 h-screen w-full bg-slate-500/70'
                    onClick={onClose}
                >
                    <div
                        className='fixed left-1/2 top-1/2 z-20 flex w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10 rounded-md bg-sky-50/75 p-10'
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className='flex flex-col items-center gap-2'>
                            <h1 className='text-lg uppercase text-sky-700'>
                                Thanks for filling out the form!
                            </h1>
                            <p className='text-sm text-sky-700/50'>
                                Check your data:
                            </p>
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
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
