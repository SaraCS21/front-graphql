import { useState } from "react"
import Select from "@components/Select";
import NewModal from "@components/NewModal";


const ShopActions = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="w-[85%] flex flex-wrap justify-start mx-auto py-6">
            <button className="px-3 py-2 text-white rounded flex justify-center items-center bg-purple" onClick={() => setShowModal(true)}>Añadir producto</button>
            <Select filter={true} />

            <>
                {showModal ? (
                <NewModal setShowModal={setShowModal}/>
                ) : null}
            </>
        </section>
    )
}

export default ShopActions