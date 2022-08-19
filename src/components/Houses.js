import { useEffect } from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import OtherHousesIcon from '@mui/icons-material/OtherHouses';
function Houses() {
    const [houses, setHouses] = useState()
    useEffect(() => {
        async function result() {
            const result = await fetch('https://www.anapioficeandfire.com/api/houses')
            const mainres = await result.json()

            setHouses(mainres)
        }
        result()

    }, [])
    console.log(houses)
    return (
        <>


            <Grid container>

                {houses?.map((house) => (
                    <Grid container item sm={6} justify='center'>
                        <Grid item sm={4}>
                            <OtherHousesIcon color="primary" sx={{ fontSize: 220 }} />
                        </Grid>
                        <Grid item sm={8} mt={5}>
                            <Typography variant="h6" component="h5">{house.name}</Typography>
                            <Typography>Author : {house.overlord ? 'Click to View' : 'Not Mentioned'}</Typography>
                            <Typography>Region : {house.region}</Typography>
                            <Typography>Words : {house.words ? house.words : 'Not mentioned'}</Typography>
                            <Typography>Coat Of Arms : {house.coatOfArms ? house.coatOfArms : 'Not mentioned'}</Typography>

                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </>

    )


}



export default Houses