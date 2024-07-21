import { useEffect, useState } from 'react';
import './Home.css';
import { Box, Button, Grid, MenuItem, Select, Tooltip } from '@mui/material';
import TaskCard from '../components/TaskCard';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../store/actions/taskActions';
import Task from '../components/Task';
import { setFilter } from '../store/reducers/tasks';

const Home = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.tasks);
    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState('all');
    const handleTaskOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        dispatch(getAllTasksAction());
    }, []);

    return (
        <>
            <Tooltip title='Add Item' placement='right'>
                <Button
                    onClick={handleTaskOpen}
                    sx={{
                        position: 'fixed',
                        top: 10,
                        left: 10,
                        minWidth: '50px',
                        height: '50px',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        ':focus': {
                            outline: 'none',
                        },
                    }}
                >
                    <IoIosAddCircle size='48px' color='#151515' />
                </Button>
            </Tooltip>
            <Box
                sx={{
                    position: 'fixed',
                    top: 10,
                    right: 15,
                    minWidth: '50px',
                    height: '50px',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ':focus': {
                        outline: 'none',
                    },
                }}
            >
                <Select
                    size='small'
                    id='standard-select-status'
                    onChange={(e) => {
                        setSelect(e.target.value);
                        dispatch(setFilter(e.target.value));
                    }}
                    value={select}
                    sx={{
                        width: { xs: '40vw', md: '20vw' },
                        mx: 'auto',
                        my: 2,
                        backgroundColor: '#fff',
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                    }}
                >
                    <MenuItem value='all' selected>
                        All Tasks
                    </MenuItem>
                    <MenuItem value='todo'>Todo</MenuItem>
                    <MenuItem value='in_progress'>In Progress</MenuItem>
                    <MenuItem value='done'>Done</MenuItem>
                </Select>
            </Box>
            <Box
                id='home'
                sx={{
                    px: 2,
                }}
            >
                <Grid container spacing={2}>
                    {tasks.map(
                        (task) =>
                            task.show && (
                                <Grid item xs={12} md={3} key={task.id}>
                                    <TaskCard task={task} />
                                </Grid>
                            )
                    )}
                </Grid>
                <Task open={open} action='ADD' handleClose={handleTaskOpen} />
            </Box>
        </>
    );
};

export default Home;
