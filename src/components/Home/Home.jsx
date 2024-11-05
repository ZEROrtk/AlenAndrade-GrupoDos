import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


export default function Home() {
    return (
        <div className="bg-rose-200">
            <div className="h-[550px] w-[115vw] bg-cover bg-center">
                <div className="container mx-auto max-w-[1170px] flex flex-col h-[700px] justify-center">
                <h3 className="text-[black] font-cursive text-[100px] leading-[80px] uppercase">Zero</h3>
                <h6 className="text-[black] font-bold text-[100px] leading-[80px] ">Store</h6>
                <Link to="/productos" className="bg-[black] px-[50px] py-[5px] text-[18px]  leading-[46px] flex w-[180px] text-center text-[#ffffff] mt-[30px]">Comprar</Link>
                </div>
            </div>
        </div>
             );
}