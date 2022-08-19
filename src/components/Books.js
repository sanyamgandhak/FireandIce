import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect } from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { useLocation } from 'react-router-dom';




function Books(props) {
    const [books, setBooks] = useState()
    const [search, setSearch] = useState('')
    const location = useLocation();
    const data = location.state;
   


    let name;
    let charbooks;

    const charbook = useCallback(async (name, charbooks) => {

        console.log('printing');
        // if(!name && !charbooks)
        // {
        //     return
        // }
        // <TailSpin color="#00BFFF" height={80} width={80} />
        let mainresult = [];
        for (let i = 0; i < charbooks.length; i++) {
            const result1 = await fetch(charbooks[i])
            const resjson = await result1.json()
            console.log(resjson)
            mainresult.push(resjson)
        }
        setBooks(mainresult)

    }, [name, charbooks])

    useEffect(() => {

        if (data) {
            name = data.aliases;
            charbooks = data.books
            charbook(name, charbooks)
          
        }



    }, [name, charbooks])

    // console.log(this.props.location.state)

    // const books1 = props?.location.state.book
    // console.log(books1)


    const handle = (e) => {
        setSearch(e.target.value)
    }





    useEffect(() => {
        async function result() {
            const result = await fetch('https://www.anapioficeandfire.com/api/books')
            const mainres = await result.json()
            setBooks(mainres)

        }
        result()

    }, [])

    return (
        <>
            <Box sx={{ ml: 2, mt: 2 }}>

                <TextField
                    id="search-bar"
                    value={search}
                    onChange={(e) =>
                        handle(e)}
                    variant="outlined"
                    placeholder="Enter Book's Full Name"
                    size="small"
                />

            </Box>

            <Grid container>

                {books?.filter((b) => {
                    if (search === '') {
                        return b
                    } else if (b?.name?.includes(search)) {
                        return b
                    }
                }).map((book) => (
                    <Grid container item sm={4} justify='center'>
                        <Grid item sm={5}>
                            <MenuBookIcon color="primary" sx={{ fontSize: 180 }} />
                        </Grid>
                        <Grid item sm={7} mt={5}>
                            <Typography variant="h6" component="h5">{book?.name}</Typography>
                            <Typography>Author : {book?.authors[0]}</Typography>
                            <Typography>Publisher : {book?.publisher}</Typography>
                            <Typography>Pages : {book?.numberOfPages}</Typography>
                            <Typography>ISBN : {book?.isbn}</Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>

    )
}



export default Books