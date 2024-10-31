import { useEffect, useState } from "react";
import Category from "./Category";


const JobCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() =>{
        fetch(`categories.json`)
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="mt-10">
            <h2 className="text-2xl md:text-5xl font-bold text-center">Job Category List: {categories.length}</h2>
            <div className="grid md:grid-cols-4 mx-4 lg:mx-28 mt-8 ">
                {
                    categories.map(category => <Category category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;