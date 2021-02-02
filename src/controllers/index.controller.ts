import { Request, Response } from 'express';

export function indexController(req:Request, res:Response):Response {

    return res.json({
        ok:"true",
        msg:"welcome to my API"});
    
}