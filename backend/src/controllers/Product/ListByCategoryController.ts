import { Request,Response } from "express";
import { ListByCategoryService } from "../../services/Product/ListByCategoryService";

class ListByCategoryController{
    async handle(req:Request, res:Response){
        const categoryId = req.query.categoryId as string
        
        const listByCategory = new ListByCategoryService();

        const produts = await listByCategory.execute({categoryId})
        
        return res.json(produts);
    }
}

export {ListByCategoryController}
