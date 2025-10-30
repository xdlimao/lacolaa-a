import { randomUUID } from 'crypto'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'

const path = "./db/database.json"

async function readProductDatabase(){
    let data = await fs.readFile(path, "utf-8")
    return JSON.parse(data)
}

async function createProductDatabase(nome, image_url) {
    let data = JSON.parse(await readProductDatabase())
    data.push({ id: uuidv4(), nome: nome, preco: preco, image_url: image_url})
    await fs.writeFile(data)
    return 1
}

export { readProductDatabase, createProductDatabase }
