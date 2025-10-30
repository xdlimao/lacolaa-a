import express from "express"

import { router as healthcheck_controller } from "./controllers/healthcheck.js"
import { router as product_controller } from "./controllers/product.js"

const app = express()

app.use("/healthcheck", healthcheck_controller)
app.use("/product", product_controller)

app.listen(5001)