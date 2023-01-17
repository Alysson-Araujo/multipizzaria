import { Request, Response } from "express";
import { CreateProductService } from "../../services/Product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const { name, description, price, categoryId } = req.body;

    const createProductService = new CreateProductService();

    if(!req.file) throw new Error("Error upload file")

    else{
      const {originalname,filename:banner} = req.file

      const product = await createProductService.execute({
        name,
        banner,
        description,
        price,
        categoryId
      });
  
      return res.status(201).json(product);
    }
    
  }
}


export { CreateProductController };
