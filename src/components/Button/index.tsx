import './Button.scss';

interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Button = ({ label, onClick, className = '' }: ButtonProps) => {
    return (
        <button className={`my-button ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
