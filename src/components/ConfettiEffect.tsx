import ConfettiExplosion from 'react-confetti-explosion';

interface ConfettiEffectProps {
    offTheEffect: () => void;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ offTheEffect }) => {
    return (
        <ConfettiExplosion
            particleCount={300}
            duration={2500}
            width={1200}
            onComplete={offTheEffect}
            colors={[
                '#0e7490',
                '#22d3ee',
                '#1d4ed8',
                '#60a5fa',
                '#0ea5e9',
                '#38bdf8',
                '#1e40af',
                '#6d28d9',
                '#8b5cf6',
                '#a855f7',
                '#6b21a8',
                '#d946ef',
                '#a21caf',
                '#ec4899'
            ]}
        />
    );
};

export default ConfettiEffect;
