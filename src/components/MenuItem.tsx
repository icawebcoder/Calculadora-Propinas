import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button className="border-2 rounded-lg border-x-blue-400 border-y-blue-800 hover:bg-blue-200 w-full p-2 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">{item.price} €</p>

        </button>
    )
}
