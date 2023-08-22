import express from 'express'
import * as update from '../controllers/update.controller'    
import 'dotenv/config'

export const updateRoute = express()

updateRoute.put('/update/:id', async (req, res) => {
    try{
        const result = await update.run('')
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
