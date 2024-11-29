import React, { useState } from 'react';
import { IIdeasForm, IdeaStatus } from '../OfferIdeas/utils';
import Button from '../../Button';

import './AddIdeaForm.scss';

interface IIdeasStateProps {
    onSaveIdea: (idea: IIdeasForm) => void;
    onCancel: () => void;
    initialValues: IIdeasForm | null;
}

const AddIdeaForm = ({ onSaveIdea, onCancel, initialValues }: IIdeasStateProps) => {
    const [ideaState, setIdeaState] = useState<IIdeasForm>({
        id: initialValues?.id || '',
        offer: initialValues?.offer || '',
        status: initialValues?.status || IdeaStatus.Pending,
    });

    const handleChangeIdea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setIdeaState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onSaveIdea(ideaState);
    };

    return (
        <>
            <div className="add-idea">
                <div className="add-idea__container">
                    <div className="add-idea__info">
                        <label className="add-idea__label">Идея</label>
                        <textarea className="add-idea__textarea" name="offer" value={ideaState.offer} onChange={handleChangeIdea} />
                    </div>
                </div>
                <div className="add-idea__buttons">
                    <Button className="my-button add-idea__button add-idea__button_save" label="Отправить" onClick={handleSubmit} />
                    <Button className="my-button add-idea__button add-idea__button_cancel" label="Отмена" onClick={onCancel} />
                </div>
            </div>
        </>
    );
};

export default AddIdeaForm;
