import { useEffect, useState } from 'react';

import Button from '../../Button';
import Popup from '../../Popup';
import AddDataForm from '../AddDataForm';
import { IDataForm, dataList, tableHeaders } from './utils';
import './DataEntry.scss';
import EditDeleteIcons from '../../EditDeleteIcons';
import DeleteConfirmationPopup from '../../DeleteConfirmationPopup';

const LOCAL_STORAGE_KEY = 'dataList';

const DataEntry = () => {
    const [data, setData] = useState<IDataForm[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [dataToDelete, setDataToDelete] = useState<IDataForm | null>(null);
    const [dataState, setDataState] = useState<IDataForm | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            setData(dataList);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataList));
        }
    }, []);

    const handleSaveData = (newData: IDataForm) => {
        if (dataState) {
            const updatedData = data.map(item => (item.url === dataState.url ? newData : item));
            setData(updatedData);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
        } else {
            const updatedData = [...data, newData];
            setData(updatedData);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
        }

        setIsPopupOpen(false);
        setDataState(null);
    };

    const handleAddData = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setDataState(null);
    };

    const handleEditData = (item: IDataForm) => {
        setDataState(item);
        setIsPopupOpen(true);
    };

    const handleOpenDeletePopup = (item: IDataForm) => {
        setDataToDelete(item);
    };

    const handleConfirmDelete = () => {
        if (dataToDelete) {
            const updatedData = data.filter(dataItem => dataItem.url !== dataToDelete.url);
            setData(updatedData);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));
        }
        setDataToDelete(null);
    };

    return (
        <>
            <Button label="Внести данные" onClick={handleAddData} />
            <div className="table-data">
                <table className="table-data__table">
                    <thead className="table-data__table-head">
                        <tr className="table-data__table-row">
                            {tableHeaders.map(header => (
                                <th className="table-data__cell" key={header.id}>
                                    {header.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="table-data__table-body">
                        {data.map((item, index) => (
                            <tr className="table-data__table-row" key={index}>
                                <td className="table-data__cell-body">{index + 1}</td>
                                <td className="table-data__cell-body">{item.payment}</td>
                                <td className="table-data__cell-body">{item.direction}</td>
                                <td className="table-data__cell-body">{item.annualPayment ? 'ДА' : 'НЕТ'}</td>
                                <td className="table-data__cell-body">{item.capital ? 'ДА' : 'НЕТ'}</td>
                                <td className="table-data__cell-body">{item.data}</td>
                                <td className="table-data__cell-body table-data__cell-body_icon">
                                    <div className="table-data__cell-body_container">
                                        <div className="table-data__cell-body_link-wrap">
                                            <a href={item.url} className="table-data__cell-body_link" target="_blank" rel="noopener noreferrer">
                                                BITRIX
                                            </a>
                                        </div>
                                        <div className="table-data__wrap-content">
                                            <EditDeleteIcons onEdit={handleEditData} onDelete={handleOpenDeletePopup} data={item} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isPopupOpen && (
                <Popup onClose={handleClosePopup} title="Данные о сделке">
                    <AddDataForm onSaveData={handleSaveData} onCancel={handleClosePopup} initialValues={dataState} />
                </Popup>
            )}

            {dataToDelete && <DeleteConfirmationPopup onClose={() => setDataToDelete(null)} onConfirmDelete={handleConfirmDelete} />}
        </>
    );
};

export default DataEntry;
