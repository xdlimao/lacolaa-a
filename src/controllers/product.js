import express from "express"
import { readProductDatabase, createProductDatabase, updateProductDatabase } from "../repository/product_repository.js";

const router = express.Router()

router.get("/", async (req, res) => {
    res.send(await readProductDatabase())
})

router.post("/", async(req, res) => {
    let nome = req.body.nome
    let preco = req.body.preco
    let image_url = req.body.image_url
    await createProductDatabase(nome, preco, image_url)
})

router.put("/", async(req, res) => {
    let nome = req.body.nome
    let preco = req.body.preco
    let image_url = req.body.image_url
    await updateProductDatabase(id, nome, preco, image_url)
})

export default router