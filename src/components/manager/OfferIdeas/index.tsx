import { useEffect, useState } from 'react';
import Button from '../../Button';
import { IIdeasForm } from './utils';
import './OfferIdeas.scss';
import Popup from '../../Popup';
import AddIdeaForm from '../AddIdeaForm';
import { LOCAL_STORAGE_KEY } from '../../leader/IdeasBlock/utils';

const OfferIdeas = () => {
    const [ideas, setIdeas] = useState<IIdeasForm[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [ideaState, setIdeaState] = useState<IIdeasForm | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedData) {
            const localIdeas: IIdeasForm[] = JSON.parse(storedData);
            setIdeas(localIdeas);
        } else {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
        }
    }, []);

    const handleSaveIdea = (newIdea: IIdeasForm) => {
        const updatedIdeas = ideaState ? ideas.map(item => (item.id === ideaState.id ? { ...item, ...newIdea } : item)) : [...ideas, { ...newIdea, id: Date.now().toString() }];
        setIdeas(updatedIdeas);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedIdeas));
        setIsPopupOpen(false);
        setIdeaState(null);
    };

    const handleAddIdea = () => setIsPopupOpen(true);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setIdeaState(null);
    };

    return (
        <>
            <Button label="Предложить идею" onClick={handleAddIdea} />
            <div className="table-offer">
                <table className="table-offer__table">
                    <thead className="table-offer__table-head">
                        <tr className="table-offer__table-row">
                            <th className="table-offer__cell">Текст идеи</th>
                            <th className="table-offer__cell">Статус</th>
                        </tr>
                    </thead>
                    <tbody className="table-offer__table-body">
                        {ideas.map((idea, index) => (
                            <tr className="table-offer__table-row" key={index}>
                                <td className="table-offer__cell-body">{idea.offer}</td>
                                <td className="table-offer__cell-body">{idea.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isPopupOpen && (
                <Popup onClose={handleClosePopup} title="Идея">
                    <AddIdeaForm onSaveIdea={handleSaveIdea} onCancel={handleClosePopup} initialValues={ideaState} />
                </Popup>
            )}
        </>
    );
};

export default OfferIdeas;
