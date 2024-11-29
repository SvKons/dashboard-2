import './Button.scss';

interface IButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button = ({ label, onClick, className = '' }: IButtonProps) => {
    return (
        <button className={`my-button ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
