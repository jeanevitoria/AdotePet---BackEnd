import { atualizarPerfilService, getAnimaisPublicadosService, deletarPublicacaoService, getUserService } from '../services/userService.js'

export const getAnimaisPublicados = async (req, res) => {
    const user_id = req.user.id;

    getAnimaisPublicadosService(user_id)
        .then((result) => {
            return res.status(200).json(result)
        })
        .catch((error) => {
            return res.status(500).json(error.message)
        })
}

export const deletarPublicacao = async (req, res) => {
    const { idAnimal } = req.body;

    deletarPublicacaoService(idAnimal)
        .then((result) => {
            return res.status(200).json(result)
        })
        .catch((error) => {
            return res.status(500).json(error.message)
        })
}

export const atualizarPerfil = async (req, res) => {
    const user_id = req.user.id;
    const data = req.body;

    atualizarPerfilService(data, user_id)
        .then((result) => {
            return res.status(result ? 200 : 404).json(result)
        })
        .catch((error) => {
            return res.status(500).json(error.message)
        })
}

export const getUser = async (req, res) => {
    const id = req.user.id;
    getUserService(id)
        .then((result) => { return res.status(result ? 200 : 404).json(result) })
        .catch((err) => { return res.status(500).json(err.message) })
}

export const getResponsavel = async (req, res) => {
    const id = req.params.id;
    getUserService(id)
        .then((result) => { return res.status(result ? 200 : 404).json(result) })
        .catch((err) => { return res.status(500).json(err.message) })
}

export const compararUsers = async (req, res) => {
    const { id } = req.body;
    const id_logged = req.user.id;
    const idsMatch = id === id_logged;
    return res.status(200).json({ idsMatch });
}