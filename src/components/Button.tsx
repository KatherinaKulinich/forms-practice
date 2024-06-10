import DefaultButton from './DefaultButton';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    option: 'regular' | 'secondary' | 'reset';
    buttonText: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
    type,
    buttonText,
    onClick,
    option
}) => {
    switch (option) {
        case 'regular':
            return (
                <DefaultButton
                    buttonText={buttonText}
                    onClick={onClick}
                    styles='bg-indigo-600 text-slate-200 hover:bg-indigo-700 active:bg-indigo-900'
                    type={type}
                />
            );
        case 'reset':
            return (
                <DefaultButton
                    buttonText={buttonText}
                    onClick={onClick}
                    styles='bg-indigo-100 text-indigo-600 hover:bg-indigo-200 active:bg-indigo-300'
                    type={type}
                />
            );
        case 'secondary':
            return (
                <DefaultButton
                    buttonText={buttonText}
                    onClick={onClick}
                    styles=''
                    type={type}
                />
            );
        default:
            return null;
    }
};

export default Button;
