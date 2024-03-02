import prismaClient from "../../prisma";

interface OrderRequesta{
    order_id: string
}

class RemoveOrderService{
    async execute({ order_id }: OrderRequesta){

        const order = await prismaClient.order.delete({
            where:{
                id: order_id,
            }
        })

        return order;

    }
}

export {RemoveOrderService}