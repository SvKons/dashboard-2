import { useEffect, useState } from 'react';
import Button from '../../Button';
import { Member } from '../MemberManagement/utils';
import './AddEmployeeForm.scss';

interface AddMemberFormProps {
    onSave: (member: Member) => void;
    onCancel: () => void;
    initialValues: Member | null;
}

const AddEmployeeForm = ({ onSave, onCancel, initialValues }: AddMemberFormProps) => {
    const [formState, setFormState] = useState({
        name: '',
        position: '',
        email: '',
        phone: '',
    });

    // Используем useEffect, чтобы при изменении initialValues обновить состояние формы
    useEffect(() => {
        if (initialValues) {
            setFormState({
                name: initialValues.name,
                position: initialValues.position,
                email: initialValues.email,
                phone: initialValues.phone,
            });
        }
    }, [initialValues]); // Эта зависимость гарантирует, что форма будет обновляться при изменении initialValues

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(formState);
    };

    return (
        <div className="add-form">
            <div className="add-form__container">
                <div className="add-form__wrap">
                    <div className="add-form__info">
                        <label className="add-form__label">ФИО:</label>
                        <input className="add-form__input" type="text" name="name" value={formState.name} onChange={handleChange} placeholder="ФИО" />
                    </div>
                    <div className="add-form__info">
                        <label className="add-form__label">Должность:</label>
                        <input className="add-form__input" type="text" name="position" value={formState.position} onChange={handleChange} placeholder="Должность" />
                    </div>
                </div>

                <div className="add-form__wrap">
                    <div className="add-form__info">
                        <label className="add-form__label">Email:</label>
                        <input className="add-form__input" type="email" name="email" value={formState.email} onChange={handleChange} placeholder="Email" />
                    </div>
                    <div className="add-form__info">
                        <label className="add-form__label">Телефон:</label>
                        <input className="add-form__input" type="text" name="phone" value={formState.phone} onChange={handleChange} placeholder="Телефон" />
                    </div>
                </div>
            </div>

            <div className="add-form__buttons">
                <Button className="add-form__button add-form__button_save" label="Сохранить" onClick={handleSave} />
                <Button className="add-form__button add-form__button_cancel" label="Отмена" onClick={onCancel} />
            </div>
        </div>
    );
};

export default AddEmployeeForm;
