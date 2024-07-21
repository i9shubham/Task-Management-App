import {
    Box,
    Card,
    CardActions,
    CardContent,
    Tooltip,
    Typography,
} from '@mui/material';
import './TaskCard.css';
import PropTypes from 'prop-types';
import { MdModeEdit } from 'react-icons/md';
import { useState } from 'react';
import Task from './Task';

const status = {
    todo: 'lightcoral',
    done: 'lightgreen',
    in_progress: 'lightblue',
};

const TaskCard = ({ task }) => {
    const [open, setOpen] = useState(false);
    const handleTaskOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <Card
                style={{
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#f5f5f5',
                    border: `1px solid ${status[task.status]}`,
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    justifyContent: 'space-between',
                    '@media (max-width: 600px)': {
                        width: '100%',
                    },
                }}
            >
                <CardContent>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                sx={{ fontSize: 14 }}
                                color='#151515'
                                gutterBottom
                            >
                                {task.title}
                            </Typography>
                            <Tooltip title={task.status} placement='bottom'>
                                <Box
                                    sx={{
                                        backgroundColor: status[task.status],
                                        width: '10px',
                                        height: '10px',
                                        padding: '5px',
                                        borderRadius: '50%',
                                        color: '#fff',
                                    }}
                                ></Box>
                            </Tooltip>
                        </div>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color='text.secondary'
                            gutterBottom
                        >
                            {task.description !== ''
                                ? task.description.length > 150
                                    ? `${task.description.slice(0, 150)} ...`
                                    : task.description
                                : 'No description'}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Tooltip title='Edit Task' placement='right'>
                        <button
                            // style={{ backgroundColor: status[task.status] }}
                            className='edit-btn'
                            onClick={handleTaskOpen}
                        >
                            <MdModeEdit />
                        </button>
                    </Tooltip>
                </CardActions>
            </Card>

            <Task
                data={task}
                open={open}
                action='UPDATE'
                handleClose={handleTaskOpen}
            />
        </>
    );
};

TaskCard.propTypes = {
    task: PropTypes.object.isRequired,
};

export default TaskCard;
