import { Request, Response } from "express";
import { getRepository } from "typeorm";


import letterView from '../views/letterView';
import letterModel from "../models/letterModel";

export default {
    async show(request: Request, response: Response) {

        const { id } = request.params;

        const letterRepository = getRepository(letterModel);

        const letter = await letterRepository.findOneOrFail(id)

        return response.json(letterView.render(letter));
    },

    async create(request: Request, response: Response) {
        const {
            destinatario,
            remetente,
            msg
        } = request.body;
    
        const letterRepository = getRepository(letterModel);

        const data = {
            destinatario,
            remetente,
            msg
        };


        const letter = letterRepository.create(data);

        await letterRepository.save(letter);

        return response.status(201)
            .json(letterView.render(letter));
    }
}