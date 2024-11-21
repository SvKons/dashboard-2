import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { Member, members as initialMembers } from './utils';
import Button from '../../Button';
import Popup from '../../Popup';
import AddEmployeeForm from '../AddEmployeeForm';
import './MemberManagement.scss';

const LOCAL_STORAGE_KEY = 'members';

const MemberManagement = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formState, setFormState] = useState<Member | null>(null);

    useEffect(() => {
        const storedMembers = localStorage.getItem(LOCAL_STORAGE_KEY);

        if (storedMembers) {
            setMembers(JSON.parse(storedMembers));
        } else {
            setMembers(initialMembers);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialMembers));
        }
    }, []);

    const handleSaveMember = (newMember: Member) => {
        if (formState) {
            const updatedMembers = members.map(member => (member.name === formState.name ? newMember : member));
            setMembers(updatedMembers);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMembers));
        } else {
            const updatedMembers = [...members, newMember];
            setMembers(updatedMembers);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMembers));
        }

        setIsPopupOpen(false);
        setFormState(null);
    };

    const handleEditMember = (index: number) => {
        const memberToEdit = members[index];
        setFormState(memberToEdit);
        setIsPopupOpen(true);
    };

    const handleDeleteMember = (index: number) => {
        const updatedMembers = members.filter((_, i) => i !== index);
        setMembers(updatedMembers);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMembers));
    };

    const handleAddMember = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setFormState(null);
    };

    return (
        <>
            <Button label="Добавить сотрудника" onClick={handleAddMember} />
            <div className="table-employee">
                <table className="table-employee__table">
                    <thead className="table-employee__table-head">
                        <tr className="table-employee__table-row">
                            <th className="table-employee__cell">№</th>
                            <th className="table-employee__cell">ФИО</th>
                            <th className="table-employee__cell">Должность</th>
                            <th className="table-employee__cell">Email</th>
                            <th className="table-employee__cell">Телефон</th>
                        </tr>
                    </thead>
                    <tbody className="table-employee__table-body">
                        {members.map((member, index) => (
                            <tr className="table-employee__table-row" key={`${member.name}-${index}`}>
                                <td className="table-employee__cell-body">{index + 1}</td>
                                <td className="table-employee__cell-body">{member.name}</td>
                                <td className="table-employee__cell-body">{member.position}</td>
                                <td className="table-employee__cell-body">{member.email}</td>
                                <td className="table-employee__cell-body">
                                    <div className="table-employee__wrap-content">
                                        {member.phone}
                                        <div className="table-employee__icon-employee">
                                            <IconButton aria-label="edit" onClick={() => handleEditMember(index)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" onClick={() => handleDeleteMember(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isPopupOpen && (
                <Popup onClose={handleClosePopup} title={formState ? 'Редактировать сотрудника' : 'Добавить сотрудника'}>
                    <AddEmployeeForm onSave={handleSaveMember} onCancel={handleClosePopup} initialValues={formState} />
                </Popup>
            )}
        </>
    );
};

export default MemberManagement;
