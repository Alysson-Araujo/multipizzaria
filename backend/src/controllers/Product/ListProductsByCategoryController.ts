import { Request, Response } from "express";
import { ListProductsByCategoryService } from "../../services/Product/ListProductsByCategoryService";
class ListProductsByCategoryController {
  async handle(req: Request, res: Response) {
    const categoryId  = req.query.categoryId as string;

    const createProductService = new ListProductsByCategoryService();

    console.log(categoryId)
    if (!categoryId) {
      throw new Error(`Category is empty!`);
    }

    const product = await createProductService.execute({
      categoryId,
    });

    return res.json(product);
  }
}

export { ListProductsByCategoryController };
