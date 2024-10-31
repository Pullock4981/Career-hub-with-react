

const Category = ({category}) => {
    const {logo, category_name, availability} = category
    return (
        <div className="border rounded-lg flex flex-col justify-center items-start px-6 py-4 m-4">
            <img className="mb-4" src={logo} alt="" />
            <h2 className="text-lg font-semibold">{category_name}</h2>
            <p className="text-sm">{availability}</p>
        </div>
    );
};

export default Category;