import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    const list = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return list;
  }
}

export { ListCategoryService };
