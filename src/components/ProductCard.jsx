const ProductCard = ({name,description,thumbnail}) =>{
    return(
        <div>
        <img src={thumbnail} alt={name} width="200"/>
        <div>{name}</div>            
        <div>{description}</div>
    </div>
    ); 
};

export default ProductCard ;