import { GET_CATEGORIES } from "@graphql/queries";
import { useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

const Select = ({ categoryId = "1", filter = false }) => {
    const { loading, error, data } = useQuery(GET_CATEGORIES);  
    const categories = data?.allCategories

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <select className="appearance-none border rounded p-2 mb-3 focus:outline-none focus:border-purple" name="categoryId" id="categoryId" defaultValue={categoryId}>
            {filter ? <option className="p-2" value="todos" key={uuidv4()}>Todos</option> : null}
            {
                categories.map(category => <option className="p-2" value={category.id} key={uuidv4()}>{category.name}</option>)
            }
        </select>
    );
};

export default Select;
