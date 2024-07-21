import { Dialog, DialogContent } from '@mui/material';
import PropTypes from 'prop-types';
import TaskForm from './TaskForm';

const Task = ({ action, data, open, handleClose }) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <TaskForm action={action} data={data} close={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    );
};

Task.propTypes = {
    action: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Task;
