import { useState } from 'react';

import './AddDataForm.scss';
import Button from '../../Button';
import { IDataForm } from '../DataEntry/utils';

interface IDataState {
    payment: string;
    annualPayment: boolean;
    capital: boolean;
    data: string;
    url: string;
    direction: string;
}

interface IDataStateProps {
    onSaveData: (data: IDataState) => void;
    onCancel: () => void;
    initialValues: IDataForm | null;
}

const directions = ['Направление 1', 'Направление 2', 'Направление 3', 'Направление 4', 'Направление 5'];

const AddDataForm = ({ onSaveData, onCancel, initialValues }: IDataStateProps) => {
    const [dataState, setDataState] = useState<IDataState>({
        payment: initialValues?.payment || '',
        annualPayment: initialValues?.annualPayment || false,
        capital: initialValues?.capital || false,
        data: initialValues?.data || '',
        url: initialValues?.url || '',
        direction: initialValues?.direction || '',
    });

    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setDataState(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSave = () => {
        onSaveData(dataState);
    };

    return (
        <div className="add-data">
            <div className="add-data__container">
                <div className="add-data__wrap">
                    <div className="add-data__info">
                        <label className="add-data__label">Выручка</label>
                        <input className="add-data__input" type="text" name="payment" value={dataState.payment} onChange={handleChangeData} />
                    </div>

                    <div className="add-data__info">
                        <label className="add-data__label">Ссылка на сделку</label>
                        <input className="add-data__input" type="text" name="url" value={dataState.url} onChange={handleChangeData} />
                    </div>

                    <div className="add-data__info">
                        <label className="add-data__label">Направление</label>
                        <select className="add-data__input" name="direction" value={dataState.direction} onChange={handleChangeData}>
                            <option value="">Выберите направление</option>
                            {directions.map((direction, index) => (
                                <option key={index} value={direction}>
                                    {direction}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="add-data__info">
                        <label className="add-data__label">Дата</label>
                        <input className="add-data__input" type="text" name="data" value={dataState.data} onChange={handleChangeData} />
                    </div>
                </div>

                <div className="add-data__checkboxes">
                    <div className="add-data__info add-data__info_checkbox">
                        <label className="add-data__label add-data__label_checkbox">
                            Годовая оплата
                            <input className="add-data__checkbox " type="checkbox" name="annualPayment" checked={dataState.annualPayment} onChange={handleChangeData} />
                            <span className="add-data__custom-checkbox"></span>
                        </label>
                    </div>

                    <div className="add-data__info add-data__info_checkbox">
                        <label className="add-data__label add-data__label_checkbox">
                            Мой капитал
                            <input className="add-data__checkbox" type="checkbox" name="capital" checked={dataState.capital} onChange={handleChangeData} />
                            <span className="add-data__custom-checkbox"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="add-data__buttons">
                <Button className="my-button add-data__button add-data__button_save" label="Сохранить" onClick={handleSave} />
                <Button className="my-button add-data__button add-data__button_cancel" label="Отмена" onClick={onCancel} />
            </div>
        </div>
    );
};

export default AddDataForm;
