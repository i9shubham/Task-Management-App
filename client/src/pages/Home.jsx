import { useEffect, useState } from 'react';
import './Home.css';
import { Box, Button, Grid, Tooltip } from '@mui/material';
import TaskCard from '../components/TaskCard';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasksAction } from '../store/actions/taskActions';
import Task from '../components/Task';

const Home = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state) => state.tasks);
    const [open, setOpen] = useState(false);
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
                    <IoIosAddCircle size='large' color='#151515' />
                </Button>
            </Tooltip>
            <Box
                id='home'
                sx={{
                    // width: '100%',
                    px: 2,
                }}
            >
                <Grid container spacing={2}>
                    {' '}
                    {/* Removed width='100%' */}
                    {tasks.map((task) => (
                        <Grid item xs={12} md={3} key={task.id}>
                            <TaskCard task={task} />
                        </Grid>
                    ))}
                </Grid>
                <Task open={open} action='ADD' handleClose={handleTaskOpen} />
            </Box>
        </>
    );
};

export default Home;
