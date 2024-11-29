import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import './EditDeleteIcons.scss';

interface IEditDeleteIconsProps<T> {
    onEdit: (data: T) => void;
    onDelete: (data: T) => void;
    data: T;
}

const EditDeleteIcons = <T,>({ onEdit, onDelete, data }: IEditDeleteIconsProps<T>) => {
    return (
        <div className="icons-edit">
            <IconButton aria-label="edit" color="info" onClick={() => onEdit(data)}>
                <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" color="warning" onClick={() => onDelete(data)}>
                <DeleteIcon />
            </IconButton>
        </div>
    );
};

export default EditDeleteIcons;
