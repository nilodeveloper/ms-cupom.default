import express from 'express'
import * as create from '../controllers/create.controller'    
import 'dotenv/config'

export const createRoute = express()

createRoute.post('/create', async (req, res) => {
    try{
        const result = await create.run('')
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
