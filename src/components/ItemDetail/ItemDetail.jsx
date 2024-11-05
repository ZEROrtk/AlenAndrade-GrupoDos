import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx'
export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({product: 0, stock: 0});
    const [loading, setLoading] = useState(true);
     useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
         });
             }, [productId]);
    const [quantity, setQuantity] = useState(1);
    const decrementQuantity = () => {
        if(quantity > 1 ){ 
            setQuantity(quantity - 1)
        }
    }
    const incrementQuantity = () => {
        if(quantity < product.stock){ //
            setQuantity(quantity + 1)
        }
    }
    const precioTotal = product.price * quantity;
    if (loading) {
        return <div className=""><Loading /></div>;
    }
    if (!product) {
        return <div>Producto no encontrado</div>;
    }
    return (
        <div className="container mx-auto max-w-[1170px] bg-yellow-100">
            <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
                <div className="span-col-1 pr-[30px]">
                    <img src={product.img} alt="Imagen del producto" className='w-full rounded-[20px]'/>
                </div>
                <div>
                    <h1 className="text-[40px] font-medium uppercase">{product.name}</h1>
                    <p className="text-[20px] my-[20px]">{product.despcription}</p>
                    <p className="text-[20px] my-[12px]">Stock: {product.stock}</p>
                    <div className="flex">
                        <button onClick={decrementQuantity} className="rounded-[5px] hover:bg-slate-600 w-[50px] border-[4px] text-[20px] flex justify-center">-</button>
                        <p className="text-[18px] px-[10px] ">{quantity}</p>
                        <button onClick={incrementQuantity} className="rounded-[5px] hover:bg-slate-600  w-[50px] border-[4px] text-[20px] flex justify-center">+</button>
                    </div>
                    <p className="text-[20px] my-[12px]">Precio unitario: ${product.price} </p>
                    <p className="text-[20px] my-[12px]">Precio Total: ${precioTotal}</p>
                    <button className="bg-gray-400 text-orange-50 text-[25px] px-[20px] py-[5px] hover:bg-[#000000]">Comprar</button> 
                </div>
            </div>
        </div>
    );
}