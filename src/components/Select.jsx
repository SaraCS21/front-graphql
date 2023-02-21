import { useRef } from "react";
import { useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { GET_PRODUCTS, GET_CATEGORIES } from "@graphql/queries";

const Select = ({ categoryId, filter = false }) => {
    const selectRef = useRef(null);

    const { refetch } = useQuery(GET_PRODUCTS, {
        variables: { categoryId: undefined },
    });

    const { loading, error, data } = useQuery(GET_CATEGORIES);  
    const categories = data?.allCategories

    const handleChangeCategory = () => {

    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <select className="appearance-none border rounded p-2 mb-3 focus:outline-none focus:border-purple" name="categoryId" id="categoryId" defaultValue={filter ? "todos" : categoryId} ref={selectRef} onChange={filter ? handleChangeCategory : null}>
            {filter ? <option className="p-2" value="todos" key={uuidv4()}>Todos</option> : null}
            {
                categories.map(category => <option className="p-2" value={category.id} key={uuidv4()}>{category.name}</option>)
            }
        </select>
    );
};

export default Select;
