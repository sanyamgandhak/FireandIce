import { useEffect } from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Routes, Route, Link } from "react-router-dom";
import Books from './Books';

import { useNavigate } from "react-router-dom";


import PersonIcon from '@mui/icons-material/Person';
function Characters() {

    const navigate = useNavigate();

    const [characters, setCharacters] = useState()
    const [aliases, setAliases] = useState('')
    const [book, setBook] = useState('')

    useEffect(() => {
        async function result() {
            const result = await fetch('https://www.anapioficeandfire.com/api/characters')
            const mainres = await result.json()

            setCharacters(mainres)
        }
        result()
        // console.log('hello')

    }, [])
    //   console.log(characters)

    const books = (b, a) => {
        console.log('hi');
        //    return  <Books data={book} aliases={aliases} />    
        setBook(b)
        setAliases(a)
    }
    return (
        <>
            <Grid container>

                {characters?.map((c) => (
                    <Grid container item sm={6} justify='center'>
                        <Grid item sm={3}>
                            <PersonIcon color="primary" sx={{ fontSize: 150 }} />
                        </Grid>
                        <Grid item sm={9} mt={5}>
                            <Typography variant="h6" component="h5">Aliases : {c.aliases[0] ? c.aliases[0] : 'Not Mentioned'}</Typography>
                            <Typography>Culture : {c.culture ? c.culture : 'Not Mentioned'}</Typography>
                            <Typography>Gender : {c.gender}</Typography>
                            <Typography>
                                Books : {c.books ?
                                    <button onClick={() => { books(c.books, c.aliases[0]) }}>
                                        <Link to='/books' state={{ aliases: c.aliases[0] ? c.aliases[0] : 'None', books: c.books }}> Click To View </Link>
                                    </button> : 'Books not mentioned'}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>

    )


}



export default Characters