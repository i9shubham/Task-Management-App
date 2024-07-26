import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import {
    Box,
    Button,
    Grid,
    InputLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // setValue,
        formState: { errors },
        // watch,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = (data) => {
        localStorage.setItem('email', data.email.split('@')[0]);
        navigate('/');
    };

    return (
        <>
            <Typography align='center' variant='h2' mb={4}>
                Task Management App
            </Typography>
            <Box
                container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                }}
            >
                <Box item>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{ width: '300px' }}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor='email' required>
                                        Email
                                    </InputLabel>
                                    <TextField
                                        {...register('email', {
                                            required: 'Enter the email',
                                        })}
                                    />
                                    <ErrorMessage
                                        style={{
                                            color: 'red',
                                            fontSize: '0.8em',
                                        }}
                                        errors={errors}
                                        name='email'
                                        as='span'
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={12} style={{ width: '300px' }}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor='password' required>
                                        Password
                                    </InputLabel>
                                    <TextField
                                        {...register('password', {
                                            required: 'Enter the password',
                                        })}
                                    />
                                    <ErrorMessage
                                        style={{
                                            color: 'red',
                                            fontSize: '0.8em',
                                        }}
                                        errors={errors}
                                        name='password'
                                        as='span'
                                    />
                                </Stack>
                            </Grid>

                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Button
                                        disableElevation
                                        type='submit'
                                        variant='contained'
                                        color='primary'
                                    >
                                        Login
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default Login;
