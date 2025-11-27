import express from "express"
import {
    createRecipe,
    DeleteRecipe,
    GetRecipeById,
    GetRecipes,
    UpdateRecipe
} from "../Controllers/RecipeControllers.js";


const router = express.Router()



router.get("/getRecipes", GetRecipes)
router.post("/createRecipe", createRecipe)
router.get("/getRecipeById/:id", GetRecipeById)
router.put("/updateRecipe/:id", UpdateRecipe)
router.delete("/deleteRecipe/:id", DeleteRecipe)


export default router;