import prismaClient from "../../prisma";

interface ItemRequest {
  itemId: string;
}

class RemoveItemService {
  async execute({ itemId }: ItemRequest) {
    const item = await prismaClient.item.delete({
      where: {
        id: itemId,
      },
    });
    return item;
  }
}

export { RemoveItemService };
