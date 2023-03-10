import { useMutation } from "@apollo/client";
import { formatProduct } from "@utils/functions";
import ProductSelect from "@components/ProductSelect";
import client from "@graphql/client";
import { GET_PRODUCTS } from "@graphql/queries";
import { CREATE_PRODUCT } from "@graphql/mutation";

const NewModal = ({ setShowModal }) => {

    const [createProduct] = useMutation(CREATE_PRODUCT, {
        refetchQueries: [
            {query: GET_PRODUCTS},
        ],
    });

    const handleCreateProduct = async event => {
        event.preventDefault();

        const input = formatProduct(event.target.elements);

        createProduct({ variables: { input } });
        await client.refetchQueries({
            include: "active",
        });
        
        setShowModal(false);
    }

    return (
            <>
                <form className="w-2/3 mx-auto justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" onSubmit={handleCreateProduct}>
                    <div className="relative w-1/2">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">Crea un nuevo producto</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6">
                                <div className="w-full flex flex-col">
                                    <label className="mb-2 font-semibold" htmlFor="name">Nombre</label>
                                    <input className="border rounded p-2 mb-3 focus:outline-none focus:border-purple" type="text" name="name" id="name"/>
                                    
                                    <label className="mb-2 font-semibold" htmlFor="price">Precio</label>
                                    <input className="border rounded p-2 mb-3 focus:outline-none focus:border-purple" type="number" step=".01" name="price" id="price"/>
                                    
                                    <label className="mb-2 font-semibold" htmlFor="image">Imagen</label>
                                    <input className="border rounded p-2 mb-3 focus:outline-none focus:border-purple" type="text" name="image" id="image"/>
                                    
                                    <label className="mb-2 font-semibold" htmlFor="categoryId">Categoría</label>
                                    <ProductSelect />

                                    <label className="mb-2 font-semibold" htmlFor="description">Descripción</label>
                                    <textarea className="border rounded p-2 mb-3 resize-none focus:outline-none focus:border-purple" name="description" id="description" rows="6"></textarea>
                                </div> 
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Cerrar
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="submit"
                            >
                                Crear
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) 
    };

export default NewModal;
