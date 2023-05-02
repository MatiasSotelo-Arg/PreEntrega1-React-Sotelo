import '/css/style.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='titulo-landing'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer