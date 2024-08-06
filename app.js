import express from "express"
import { addProduct, getProducts, getProduct, updateProduct, deleteProduct } from "./controllers/productController.js"
import {addProductValidation,updateProductValidation} from "./middleware/productValidation.js"


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/add",addProductValidation,addProduct)
app.get("/get",getProducts)
app.get("/get/:id",getProduct)
app.put("/update/:id",updateProductValidation,updateProduct)
app.delete("/delete/:id",deleteProduct)

export default app