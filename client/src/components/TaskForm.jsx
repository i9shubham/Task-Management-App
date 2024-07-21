import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ErrorMessage } from '@hookform/error-message';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Grid,
    InputLabel,
    MenuItem,
    Stack,
    TextField,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import {
    createTaskAction,
    deleteTaskAction,
    updateTaskAction,
} from '../store/actions/taskActions';
import { setFilter } from '../store/reducers/tasks';

const TaskForm = ({ action, close, data }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [formAction, setFormAction] = useState('');
    const [newTask, setNewTask] = useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
    } = useForm({
        defaultValues: {
            id: data?.id || '',
            title: data?.title || '',
            description: data?.description || '',
            status: data?.status || '',
        },
    });

    const handleConfirm = async () => {
        if (formAction === 'Update') {
            dispatch(updateTaskAction(newTask));
        } else if (formAction === 'Add') {
            dispatch(createTaskAction(newTask));
        }
        if (formAction === 'Delete') {
            dispatch(deleteTaskAction(data.id));
        }
        dispatch(setFilter('all'));
        await close();
    };
    const onSubmit = async (data) => {
        setNewTask(data);

        if (action === 'UPDATE') setFormAction('Update');
        if (action === 'ADD') setFormAction('Add');
        setOpen(true);
    };

    const handleDelete = () => {
        setFormAction('Delete');
        setOpen(true);
    };

    return (
        <>
            <h1>Task</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ width: '300px' }}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor='title' required>
                                Title
                            </InputLabel>
                            <TextField
                                {...register('title', {
                                    required: 'Enter title of the task',
                                })}
                            />
                            <ErrorMessage
                                style={{ color: 'red', fontSize: '0.8em' }}
                                errors={errors}
                                name='title'
                                as='span'
                            />
                        </Stack>
                    </Grid>

                    <Grid item xs={12} style={{ width: '300px' }}>
                        <Stack spacing={1}>
                            <InputLabel htmlFor='description' required>
                                description
                            </InputLabel>
                            <TextField
                                {...register('description', {
                                    required: 'Enter the description of task',
                                })}
                            />
                            <ErrorMessage
                                style={{ color: 'red', fontSize: '0.8em' }}
                                errors={errors}
                                name='description'
                                as='span'
                            />
                        </Stack>
                    </Grid>

                    <Grid item xs={6}>
                        <InputLabel htmlFor='status' required>
                            Status
                        </InputLabel>
                        <TextField
                            id='standard-select-currency'
                            select
                            value={watch('status')}
                            onChange={(e) => {
                                setValue('status', e.target.value);
                            }}
                            defaultValue=''
                            style={{ width: '100%', padding: '1%' }}
                            {...register('status', {
                                required: 'Select the current status of task',
                            })}
                        >
                            <MenuItem value='todo'>Todo</MenuItem>
                            <MenuItem value='in_progress'>In Progress</MenuItem>
                            <MenuItem value='done'>Done</MenuItem>
                        </TextField>
                        <ErrorMessage
                            style={{ color: 'red', fontSize: '0.8em' }}
                            errors={errors}
                            name='status'
                            as='span'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                disableElevation
                                type='submit'
                                variant='contained'
                                color='primary'
                            >
                                {action}
                            </Button>
                            {action === 'UPDATE' && (
                                <Button
                                    disableElevation
                                    variant='contained'
                                    color='error'
                                    onClick={() => handleDelete()}
                                >
                                    Delete
                                </Button>
                            )}
                        </Box>
                    </Grid>
                </Grid>
            </form>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    Are you sure, you want to {formAction} this Task?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm}>{formAction}</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

TaskForm.propTypes = {
    action: PropTypes.string,
    close: PropTypes.func,
    data: PropTypes.object,
};

export default TaskForm;
