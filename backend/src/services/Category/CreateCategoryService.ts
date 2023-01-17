import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "") throw new Error("Name invalid");

    const categoryIsMatch = prismaClient.category.findFirst({
      where: {
        name,
      },
    });

    if (categoryIsMatch) throw new Error(`Category ${name} already exists`);

    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
