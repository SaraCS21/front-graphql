import { useState, useRef } from "react";
import { useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { GET_CATEGORIES } from "@graphql/queries";

const CategorySelect = ({ refetch }) => {
    const [ currentCategory, setCurrentCategory ] = useState("todos")
    const selectRef = useRef(null);

    const { loading, error, data } = useQuery(GET_CATEGORIES);  
    const categories = data?.allCategories

    const handleChangeCategory = () => {
        const value = selectRef.current.value

        setCurrentCategory(value)

        refetch({ categoryId: value === "todos" ? undefined : value })
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <select className="appearance-none border rounded p-2 ml-3 focus:outline-none focus:border-purple" name="categoryId" id="categoryId" value={currentCategory} ref={selectRef} onChange={handleChangeCategory}>
            <option className="p-2" value="todos" key={uuidv4()}>Todos</option>
            {
                categories.map(category => <option className="p-2" value={category.id} key={uuidv4()}>{category.name}</option>)
            }
        </select>
    );
};

export default CategorySelect;
