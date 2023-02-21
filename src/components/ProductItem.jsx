import { RiDeleteBin6Line } from "react-icons/ri"
import { AiOutlineEdit } from "react-icons/ai"

const ProductItem = ({ product }) => {
  const { name, price, image, category } = product
  const { name: categoryName } = category

  return (
    <li className="w-[19%] flex flex-col justify-between border border-slate-300 rounded shadow p-5 mt-4 hover:cursor-pointer hover:scale-[105%]">
        <img className="w-[90%] h-48 self-center" src={image} alt={name} />
        <div className="p-3">
            <p className="text-purple font-medium">{categoryName}</p>
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex justify-between items-center mt-2">
                <p className="text-red-500">{price}€</p>
                <div className="flex">
                    <div className="bg-red-500 rounded p-1.5 mr-2">
                        <RiDeleteBin6Line />
                    </div>
                    <div className="bg-amber-500 rounded p-1.5">
                        <AiOutlineEdit />
                    </div>
                </div>
            </div>
        </div>
    </li>
  );
}

export default ProductItem;