import express from 'express'
import * as deleteCupom from '../controllers/deleteCupom.controller'    
import 'dotenv/config'

export const deleteCupomRoute = express()

deleteCupomRoute.delete('/delete/:id', async (req, res) => {
    try{
        const result = await deleteCupom.run(req.params.id)
        res.status(result.statusCode).json(result)
    }catch(e){
        res.status(500).json(e)
    }
});
