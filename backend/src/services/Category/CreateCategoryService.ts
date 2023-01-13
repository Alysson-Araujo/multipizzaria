import prismaClient from "../../prisma";

interface CategoryRequest {}

class CreateCategoryService {
  async execute() {
    return { ok: true };
  }
}

export { CreateCategoryService };
