import { useState } from "react"
import CategorySelect from "@components/CategorySelect";
import NewModal from "@components/NewModal";


const ShopActions = ({ refetch }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="w-[85%] flex flex-wrap justify-start items-center mx-auto py-6">
            <button className="px-3 py-2 text-white rounded flex justify-center items-center bg-purple" onClick={() => setShowModal(true)}>Añadir producto</button>
            <CategorySelect filter={true} refetch={refetch}/>

            <>
                {showModal ? (
                <NewModal setShowModal={setShowModal} />
                ) : null}
            </>
        </section>
    )
}

export default ShopActions