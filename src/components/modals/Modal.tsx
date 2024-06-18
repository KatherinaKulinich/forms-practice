import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    return createPortal(
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className='fixed inset-0 z-10 h-screen w-full bg-slate-500/80'
                    onClick={onClose}
                >
                    <div
                        className='fixed left-1/2 top-1/2 z-20 flex w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-10 rounded-md bg-sky-50/75 p-10'
                        onClick={(event) => event.stopPropagation()}
                    >
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
