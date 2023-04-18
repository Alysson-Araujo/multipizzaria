import prismaClient from "../../prisma";

interface ItemRequest {
    orderId: string;
}

class SendOrderService {
    async execute({ orderId }: ItemRequest) {
        const order = await prismaClient.order.update({
            where: {
                id: orderId,
            },
            data: {
                draft: false,
            },
        });
        return order;
    }
}

export { SendOrderService };