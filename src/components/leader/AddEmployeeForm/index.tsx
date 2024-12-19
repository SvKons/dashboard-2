import { useEffect, useState } from 'react';
import Button from '../../Button';
import { IMember } from '../MemberManagement/utils';
import './AddEmployeeForm.scss';

interface IAddMemberFormProps {
    onSave: (member: IMember) => void;
    onCancel: () => void;
    initialValues: IMember | null;
}

const AddEmployeeForm = ({ onSave, onCancel, initialValues }: IAddMemberFormProps) => {
    const [formState, setFormState] = useState({
        id: '',
        name: '',
        position: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        if (initialValues) {
            setFormState({
                id: initialValues.id,
                name: initialValues.name,
                position: initialValues.position,
                email: initialValues.email,
                phone: initialValues.phone,
            });
        }
    }, [initialValues]);

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
