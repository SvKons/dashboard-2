import { create } from 'zustand';
import { IMember } from '../types/types';
import { members as initialMembers } from '../components/leader/MemberManagement/utils';

const LOCAL_STORAGE_KEY = 'members';

interface MemberState {
    members: IMember[];
    loadMembers: () => void;
    addMember: (member: IMember) => void;
    updateMember: (updatedMember: IMember) => void;
    deleteMember: (id: string) => void;
}

const useAddMemberStore = create<MemberState>(set => ({
    members: [],
    loadMembers: () => {
        const storedMembers = localStorage.getItem(LOCAL_STORAGE_KEY);
        set({ members: storedMembers ? JSON.parse(storedMembers) : initialMembers });
    },
    addMember: (member: IMember) => {
        set(state => {
            const updatedMembers = [...state.members, member];
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMembers));
            return { members: updatedMembers };
        });
    },
    updateMember: (updatedMember: IMember) => {
        set(state => {
            const updatedMembers = state.members.map(member => (member.id === updatedMember.id ? updatedMember : member));
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMembers));
            return { members: updatedMembers };
        });
    },
    deleteMember: (id: string) => {
        set(state => {
            const updatedMembers = state.members.filter(member => member.id !== id);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedMembers));
            return { members: updatedMembers };
        });
    },
}));

export default useAddMemberStore;
