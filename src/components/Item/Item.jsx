import { Link } from "react-router-dom"

export default function Item({id, name, price, img}){
    
    return(
        <div className="my-5 px-4 py-4 inline mr-4 border-zinc-50 hover:bg-blue-400 hover:text-amber-50 hover:rounded cursor-pointer my-[12px] transition ">
            <Link to={`/products/${id}`}><img src={img} alt="Imagen Productos" /></Link>
            
            <Link to={`/products/${id}`} className="text-[25px] my-[15px] tracking-[3px] text-[#8b008b] hover:text-[#1e90ff]">{name}</Link>
            
            <h4 className="text-[18px] font-bold mb-[20px]">$ {price}</h4>
        </div>
    )
    }