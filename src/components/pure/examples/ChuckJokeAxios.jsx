import React, { useState, useEffect } from 'react';
import { getChuckJoke } from '../../../services/axiosService';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { ThumbDown, ThumbUp } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Card } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#c51162',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#4e342e',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

const ChuckJokeAxios = () => {

    const [joke, setUser] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        // obtainUser();
    }, []);

    const obtainJoke = () => {
        getChuckJoke()
            .then((response) => {
                if (response.status === 200) {
                    // console.log(response.status)
                    console.log(response.data)
                    setUser(response.data)
                }
            })
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`);
            })
    }

    const likeJoke = () => {
        setLikes(likes + 1);
        obtainJoke()
    }

    const dislikeJoke = () => {
        setDislikes(dislikes + 1);
        obtainJoke()
    }


    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card
                sx={{
                    width: 400,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '20px',
                    borderRadius: '20px'
                }}
                variant="outlined">
                <h1>Axios Example</h1>

                {joke == null ?
                    <button onClick={obtainJoke}>
                        Primer chiste Chuck
                    </button> :

                    <div>
                        <h3>{joke.value}</h3>
                        <div>
                            <ThemeProvider theme={theme}>
                                <Box component="span" sx={{ p: 3, border: '1px solid grey', borderRadius: '10px', background: 'lightgrey' }}>
                                    <IconButton color="primary" aria-label="like" size="large"
                                        onClick={() => likeJoke()}
                                    >
                                        <ThumbUp fontSize="inherit" />
                                        <p>{likes}</p>
                                    </IconButton>
                                    <IconButton color="secondary" aria-label="like" size="large"
                                        onClick={() => dislikeJoke()}
                                    >
                                        <ThumbDown fontSize="inherit" />
                                        <p>{dislikes}</p>
                                    </IconButton>
                                </Box>

                            </ThemeProvider>

                        </div>
                    </div>

                }



            </Card>
        </div>
    );
}

export default ChuckJokeAxios;
