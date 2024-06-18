interface DefaultButtonProps {
    type: 'button' | 'submit' | 'reset';
    buttonText: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    styles: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
    buttonText,
    onClick,
    styles,
    type,
    ...rest
}) => {
    return (
        <button
            onClick={onClick}
            className={`${styles} rounded-md border px-6 py-2 uppercase`}
            type={type}
            {...rest}
        >
            {buttonText}
        </button>
    );
};

export default DefaultButton;
