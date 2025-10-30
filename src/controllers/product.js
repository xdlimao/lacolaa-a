import express from "express"
import { readProductDatabase } from "../repository/product_repository.js";

const router = express.Router()

router.get("/", async (req, res) => {
    res.send(await readProductDatabase())
})

router.post("/", async(req, res) => {
    req.params
})

export { router }