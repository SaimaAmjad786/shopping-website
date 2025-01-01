import CategoryPage from './categoryPage'

const Category = ({params} : {params : {category:string}}) => {
    return (
        <div>
            <CategoryPage params = {params}/>
        </div>
    )
}

export default Category




