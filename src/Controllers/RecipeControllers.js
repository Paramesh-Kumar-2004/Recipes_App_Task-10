import { Recipe } from "../Models/RecipeModel.js";



const createRecipe = async (req, res) => {
    console.log("Entered Into Create Recipe")
    try {
        const { name, description, ingredients, instructions } = req.body

        if (!name || !description || !ingredients || !instructions) {
            return res.status(404).json({
                message: "Some Fields Are Missing"
            })
        }

        const recipe = await Recipe.create({ name, description, ingredients, instructions })

        res.status(200).json({
            message: "Recipe Created Successfully",
            recipe
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Intenal Server Error"
        })
    }
}


const GetRecipes = async (req, res) => {
    try {

        const recipe = await Recipe.find()
        const count = await Recipe.countDocuments()

        res.status(200).json({
            message: "Get Recipes",
            count,
            recipes: recipe
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


const GetRecipeById = async (req, res) => {
    console.log("Entered Into GetRecipeById")
    try {
        const { id } = req.params;

        if (!id || id.length < 8) {
            return res.status(404).json({
                message: "Id Was Wrong"
            })
        }

        const recipe = await Recipe.findById(id)

        res.status(200).json({
            message: "Recipe Found Successfully",
            recipe
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Intenal Server Error"
        })
    }
}


const UpdateRecipe = async (req, res) => {
    console.log("Entered Into Update")
    try {

        const { id } = req.params;
        const data = req.body

        console.log(data)
        if (!data) {
            return res.status(404).json({
                message: "Update Datas Is Not Available"
            })
        }

        const recipe = await Recipe.findByIdAndUpdate(
            id,
            { $set: data },
            { new: true }
        )

        res.status(200).json({
            message: "Recipe Updated Successfully",
            recipe
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Intenal Server Error"
        })
    }
}


const DeleteRecipe = async (req, res) => {
    try {

        const { id } = req.params

        const recipe = await Recipe.findByIdAndDelete(id)

        if (!recipe) {
            return res.status(404).json({
                message: "Given Id Was Wrong"
            })
        }

        res.status(200).json({
            message: "Recipe Deleted Successfully",
            recipe
        })

    } catch (error) {
        res.status(500).json({
            message: "Intenal Server Error"
        })
    }
}


export { GetRecipes, createRecipe, GetRecipeById, UpdateRecipe, DeleteRecipe }
