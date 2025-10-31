import express from "express"

import healthcheck from "./controllers/healthcheck.js"
import product from "./controllers/product.js"

const app = express()

app.use(express.json())
app.use("/healthcheck", healthcheck)
app.use("/product", product)

app.listen(5001)