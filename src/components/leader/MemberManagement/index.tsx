import { useState, useEffect } from 'react';
import Button from '../../Button';
import Popup from '../../Popup';
import AddEmployeeForm from '../AddEmployeeForm';
import './MemberManagement.scss';
import EditDeleteIcons from '../../EditDeleteIcons';
import { IMember } from '../../../types/types';
import useAddMemberStore from '../../../store/useAddMemberStore';

const MemberManagement = () => {
    const { members, loadMembers, addMember, updateMember, deleteMember } = useAddMemberStore();
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [formState, setFormState] = useState<IMember | null>(null);

    useEffect(() => {
        loadMembers();
    }, [loadMembers]);

    const handleSaveMember = (newMember: IMember) => {
        if (formState) {
            updateMember(newMember);
        } else {
            addMember(newMember);
        }
        setIsPopupOpen(false);
        setFormState(null);
    };

    const handleEditMember = (id: string) => {
        const memberToEdit = members.find(member => member.id === id);
        setFormState(memberToEdit || null);
        setIsPopupOpen(true);
    };

    const handleDeleteMember = (id: string) => {
        deleteMember(id);
    };

    const handleAddMember = () => {
        setFormState(null);
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
                            <tr className="table-employee__table-row" key={member.id}>
                                <td className="table-employee__cell-body">{index + 1}</td>
                                <td className="table-employee__cell-body">{member.name}</td>
                                <td className="table-employee__cell-body">{member.position}</td>
                                <td className="table-employee__cell-body">{member.email}</td>
                                <td className="table-employee__cell-body">
                                    <div className="table-employee__wrap-content">
                                        {member.phone}
                                        <EditDeleteIcons<string> onEdit={() => handleEditMember(member.id)} onDelete={() => handleDeleteMember(member.id)} data={member.id} />
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
