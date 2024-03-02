import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

export class ListOrderController{
    async handle(req: Request, res: Response){
        const listOrder = new ListOrderService();

        const orders = await listOrder.execute();

        return res.json(orders)
    }
}

// export { ListOrderController }