import { randomUUID } from 'crypto'
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'

const path = "./db/database.json"

async function readProductDatabase(){
    let data = await fs.readFile(path, "utf-8")
    return JSON.parse(data)
}

async function createProductDatabase(nome, preco, image_url) {
    let data = await readProductDatabase()
    data.push({ 'id': uuidv4(), 'nome': nome, 'preco': preco, 'image_url': image_url})
    await fs.writeFile(path, JSON.stringify(data))
    return 1
}

async function updateProductDatabase(id, nome=null, preco=null, image_url=null) {
    let data = await readProductDatabase()
    let product_data
    let product_id
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            product_data = data[i]
            break
        }
    }
    if (product_id == undefined) {
        return -1
    } else {
        data.pop(product_id)
        product_data.nome = nome == null ? product_data.nome : nome
        product_data.preco = preco == null ? product_data.preco : preco
        product_data.image_url = image_url == null ? product_data.image_url : image_url        
        data.push(product_data)
        return 1
    }
}

export { readProductDatabase, createProductDatabase, updateProductDatabase }
