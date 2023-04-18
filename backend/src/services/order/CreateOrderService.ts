import prismaClient from "../../prisma";

interface OrderRequest {
  table: number; //Número da mesa
  name: string;
}

class CreateOrderService {
  async execute({ table, name }: OrderRequest) {
    const order = prismaClient.order.create({
        data:{
            table,
            name
        }
    })
    return order;
}
}

export { CreateOrderService };
