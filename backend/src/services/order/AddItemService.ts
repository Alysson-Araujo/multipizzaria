import prismaClient from "../../prisma";

interface ItemRequest {
  amount: number;
  orderId: string;
  productId: string;
}
class AddItemService {
  async execute({ amount, orderId, productId }: ItemRequest) {
    const item = await prismaClient.item.create({
      data: {
        amount,
        orderId,
        productId,
      },
    });
    return item;
  }
}

export { AddItemService };
