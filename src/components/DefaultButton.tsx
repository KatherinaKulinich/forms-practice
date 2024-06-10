interface DefaultButtonProps {
    type: 'button' | 'submit' | 'reset';
    buttonText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    styles: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
    buttonText,
    onClick,
    styles,
    type
}) => {
    return (
        <button
            onClick={onClick}
            className={`${styles} w-min rounded-md border px-6 py-1 uppercase`}
            type={type}
        >
            {buttonText}
        </button>
    );
};

export default DefaultButton;
