import type { MenuItem } from "../types"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducers"

type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrderActions>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
    return (
        <button className="border-2 rounded-lg border-x-blue-400 border-y-blue-800 hover:bg-blue-200 w-full p-2 flex justify-between"
            onClick={() => dispatch({ type: 'add-item', payload: { item } })}
        >
            <p>{item.name}</p>
            <p className="font-black">{item.price} €</p>

        </button>
    )
}
