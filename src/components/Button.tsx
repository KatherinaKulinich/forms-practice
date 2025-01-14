import DefaultButton from './DefaultButton';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: 'button' | 'submit' | 'reset';
    option: 'regular' | 'secondary' | 'reset';
    buttonText: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
    type,
    buttonText,
    onClick,
    option,
    ...rest
}) => {
    switch (option) {
        case 'regular':
            return (
                <DefaultButton
                    buttonText={buttonText}
                    onClick={onClick}
                    styles='bg-violet-700 text-slate-200 hover:bg-violet-500 active:bg-violet-400'
                    type={type}
                    {...rest}
                />
            );
        case 'reset':
            return (
                <DefaultButton
                    buttonText={buttonText}
                    onClick={onClick}
                    styles='bg-indigo-100 text-indigo-600 hover:bg-indigo-200 active:bg-indigo-300'
                    type={type}
                    {...rest}
                />
            );
        case 'secondary':
            return (
                <DefaultButton
                    buttonText={buttonText}
                    onClick={onClick}
                    styles='bg-sky-600 text-slate-200 hover:bg-sky-700 active:bg-sky-900'
                    type={type}
                    {...rest}
                />
            );
        default:
            return null;
    }
};

export default Button;
