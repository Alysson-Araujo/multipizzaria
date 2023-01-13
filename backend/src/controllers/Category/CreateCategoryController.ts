import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";

class CreateCategoryController{
    async handle(req:Request,res:Response){
        const {a,b} = req.body
        const createCategoryService = new CreateCategoryService()

        const category = await createCategoryService.execute()

        return res.json(category)
    }
}
export {CreateCategoryController}