// import { Request, Response } from "express";
// import { ListProductsByCategoryService } from "../../services/Product/ListProductsByCategoryService";
// class ListProductsByCategoryController {
//   async handle(req: Request, res: Response) {
//     const { categoryId } = req.body;

//     const createProductService = new ListProductsByCategoryService();

//     if (!categoryId) {
//       throw new Error(`Category is empty!`);
//     }

//     const product = await createProductService.execute({
//       categoryId,
//     });

//     return res.status(201).json(product);
//   }
// }

// export { ListProductsByCategoryController };
