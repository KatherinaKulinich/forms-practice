interface DefaultButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
            className={`${styles} rounded-md border px-10 py-2 uppercase disabled:bg-slate-200/25`}
            type={type}
            {...rest}
        >
            {buttonText}
        </button>
    );
};

export default DefaultButton;
