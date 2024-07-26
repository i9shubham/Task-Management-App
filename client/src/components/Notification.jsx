import { Alert, Dialog } from '@mui/material';
import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationToDefault } from '../store/reducers/tasks';

const Notification = () => {
    const { showNotification, notificationData } = useSelector(
        (state) => state.tasks
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                dispatch(setNotificationToDefault());
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [dispatch, showNotification]);

    return (
        <>
            <Dialog open={showNotification} onClose={close}>
                <Alert icon={<FaCheck />} severity='success'>
                    {notificationData}
                </Alert>
            </Dialog>
        </>
    );
};

export default Notification;
