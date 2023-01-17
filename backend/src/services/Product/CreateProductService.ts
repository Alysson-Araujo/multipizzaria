import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  categoryId:string
}

class CreateProductService {
  async execute({ name, banner, description, price,categoryId}: ProductRequest) {
    const productIsAlready = await prismaClient.product.findFirst({
      where: {
        name,
      },
    });

    if (productIsAlready) throw new Error(`Product ${name} already exists!`);

    const product = await prismaClient.product.create({
      data: {
        name,
        banner,
        description,
        price,
        categoryId
      },
    });
    return product
  }

}

export { CreateProductService };
