import letterModel from "../models/letterModel";

export default {
    render(letter: letterModel) {
        return {
            id: letter.id,
            remetente: letter.remetente,
            destinatario: letter.destinatario,
            msg: letter.msg,
        }
    },
    renderId(letter: letterModel){
        return{
            id: letter.id
        }
    }
}