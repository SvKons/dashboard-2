import { useEffect, useRef } from 'react';
import './Popup.scss';

interface ModalProps {
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Popup = ({ onClose, title, children }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="modal">
            <div className="modal__content" ref={modalRef}>
                <div className="modal__top">
                    <h2 className="modal__title">{title}</h2>
                    <button className="modal__close" onClick={onClose}>
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Popup;
