import prismaClient from "../../prisma";

interface ListProductsByCategoryRequest {
  categoryId: string;
}

class ListProductsByCategoryService {
  async execute({ categoryId }: ListProductsByCategoryRequest) {
    const list = await prismaClient.product.findMany({
      where: {
        categoryId,
      },
    });

    return list;
  }
}

export { ListProductsByCategoryService };
