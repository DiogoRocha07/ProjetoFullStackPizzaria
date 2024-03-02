import prismaClient from "../../prisma";

interface RemoveRequest {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: RemoveRequest) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }
}

export { RemoveItemService };