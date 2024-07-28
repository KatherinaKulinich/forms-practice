import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import cx from 'classnames';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    additionalStyles?: string;
}

const Modal: React.FC<ModalProps> = ({
    isVisible,
    onClose,
    children,
    additionalStyles
}) => {
    return createPortal(
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className='fixed inset-0 z-10 flex h-screen w-full items-center justify-center bg-slate-500/80'
                    onClick={onClose}
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.3 }
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.3 }
                    }}
                >
                    <motion.div
                        className={cx(
                            'fixed z-20 flex w-full flex-col items-center gap-10 rounded-md bg-violet-50/75 p-10',
                            additionalStyles
                        )}
                        onClick={(event) => event.stopPropagation()}
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3 }
                        }}
                        exit={{
                            opacity: 0,
                            y: 30,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
