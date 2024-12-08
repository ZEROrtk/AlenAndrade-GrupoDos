import { Link } from "react-router-dom";

export default function Home() {
    return (
            <div className=" bg-center bg-rose-200">
            <div className="container flex flex-col mx-auto h-[500px] justify-center">
            <h3 className="text-[black] text-[100px] leading-[80px]">Zero</h3>
            <h6 className="text-[black] text-[100px] leading-[80px] ">Store</h6>
            <Link to="/productos" className="bg-[black] px-[50px] py-[5px] text-[18px]  leading-[46px] flex w-[180px] text-center text-[#ffffff] mt-[50px]">Comprar</Link>
            </div>
            </div>
       
             );
}