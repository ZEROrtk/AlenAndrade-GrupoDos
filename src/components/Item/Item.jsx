import { Link } from "react-router-dom"

export default function Item({id, name, price, img}){
    
    return(
        <div className="flex flex-col items-center my-[10px] mx-[10px] justify-center">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>
            
            <Link to={`/products/${id}`} className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#8b008b] hover:text-[#1e90ff]">{name}</Link>
            
            <h4 className="text-[18px] font-bold mb-[20px]">$ {price}

                
            </h4>
        </div>
    )
    }