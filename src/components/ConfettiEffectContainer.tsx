import ConfettiEffect from './ConfettiEffect';

interface ConfettiEffectContainerProps {
    isConfetti: boolean;
    finishConfettiEffect: () => void;
}

const ConfettiEffectContainer: React.FC<ConfettiEffectContainerProps> = ({
    isConfetti,
    finishConfettiEffect
}) => {
    return isConfetti ? (
        <ConfettiEffect offTheEffect={finishConfettiEffect} />
    ) : null;
};

export default ConfettiEffectContainer;
