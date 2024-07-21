import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
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

const TaskForm = ({ action, close, data }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [formAction, setFormAction] = useState('');
    const [newTask, setNewTask] = useState({});

    // const [newWarehouse, setNewWarehouse] = useState({});

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    // const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        // watch,
        setValue,
        formState: { errors },
        // getValues,
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
        // console.log(formAction);
        console.log(newTask);
        if (formAction === 'Update') {
            await dispatch(updateTaskAction(newTask));
        } else if (formAction === 'Add') {
            await dispatch(createTaskAction(newTask));
        }
        if (formAction === 'Delete') {
            await dispatch(deleteTaskAction(data.id));
        }
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

    // useEffect(() => {
    //     cities.filter((city) => {
    //         if (city.value === getValues().city) {
    //             setValue('state', city.state);
    //         }
    //     });
    // }, [getValues().city]);

    return (
        <>
            {/* <input {...register('id')} />
                {errors.id && <span>{errors.id.message}</span>} */}
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
                            // required
                            id='standard-select-currency'
                            select
                            // label='Status'
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
                                size='large'
                                type='submit'
                                variant='contained'
                                color='primary'
                            >
                                {action}
                            </Button>
                            {action === 'UPDATE' && (
                                <Button
                                    disableElevation
                                    size='large'
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
                    Are you sure, you want to {formAction} this Warehouse?
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
