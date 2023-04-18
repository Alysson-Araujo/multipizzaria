import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController{
    async handle(req:Request,res:Response){
        const {amount,orderId,productId} = req.body
        const addItemService = new AddItemService()
        const item = await addItemService.execute({amount,orderId,productId})
        return res.json(item)
    }
}

export {AddItemController}