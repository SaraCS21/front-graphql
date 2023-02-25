import { useState } from "react"
import { useMutation } from "@apollo/client"
import { RiDeleteBin6Line } from "react-icons/ri"
import { AiOutlineEdit } from "react-icons/ai"
import Loading from "@components/Loading"
import Modal from "@components/Modal"
import { GET_PRODUCTS } from "@graphql/queries.js"
import { DELETE_PRODUCT } from "@graphql/mutation.js"

const ProductItem = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const [deleteProduct, { loading, error }] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [
      {query: GET_PRODUCTS}, // DocumentNode object parsed with gql
      'GetProducts' // Query name
    ],
  });

  const { id, name, price, image, category } = product
  const { name: categoryName } = category

  const handleDeleteProduct = () => {
    deleteProduct({ variables: { deleteProductId: id } });
  }

  if (loading) return <Loading />;
  if (error) return `Submission error! ${error.message}`;

  return (
    <li className="w-5/6 lg:w-[19%] flex flex-col justify-between border border-slate-300 rounded shadow p-5 mt-4 mr-3 hover:cursor-pointer">
        <img className="w-[90%] h-48 self-center" src={image} alt={name} />
        <div className="p-3">
            <p className="text-purple font-medium">{categoryName}</p>
            <h2 className="text-lg font-semibold">{name}</h2>
            <div className="flex justify-between items-center mt-2">
                <p className="text-red-500">{price}€</p>
                <div className="flex">
                    <button className="bg-red-500 rounded p-1.5 mr-2" onClick={handleDeleteProduct}>
                        <RiDeleteBin6Line />
                    </button>
                    <button className="bg-amber-500 rounded p-1.5" onClick={() => setShowModal(true)}>
                        <AiOutlineEdit />
                    </button>

                    <>
                      {showModal ? (
                        <Modal setShowModal={setShowModal} id={id}/>
                      ) : null}
                    </>
                </div>
            </div>
        </div>
    </li>
  );
}

export default ProductItem;