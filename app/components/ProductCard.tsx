"use client";

import Link from "next/link";
import { ProductType } from "../types";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

type ProductCardProps = {
 product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
 const [productType, setProductType] = useState({
  color: product.colors[0],
  size: product.sizes[0],
 });
 const handleProductTypes = (
  { type, value }: { type: "size" | "color"; value: string }
 ) => {
  // console.log(type, value);
  setProductType((prev) => ({
   ...prev,
   [type]: value
  }))
 }
 return (
  <div className="shadow-lg rounded-lg overflow-hidden">
   <Link href={`/product/${product.id}`}>
    <div className="relative aspect-2/3">
     <Image src={product.images[productType.color]} alt={product.name} fill className="object-cover hover:scale-105 duration-300 transition-all" />
    </div>
   </Link>
   {/* Product Deatils  */}
   <div className="flex flex-col gap-4 p-4">
    <h1 className="font-medium">{product.name}</h1>
    <p className="text-sm text-gray-500">{product.shortDescription}</p>
    {/* Product Types */}
    <div className="flex items-center gap-4 text-xs">
     {/* size */}
     <div className="flex flex-col gap-1">
      <span className="text-gray-500">Size</span>
      <select onChange={(e) => handleProductTypes({ type: 'size', value: e.target.value })} name="size" id="size" className="ring ring-gray-300 rounded-md py-1 px-2">
       {product.sizes.map((size, index) => (
        <option key={index} value={size}>{size.toUpperCase()}</option>
       ))}
      </select>
     </div>
     <div className="flex flex-col gap-1 ">
      <span className="text-gray-500">Colors</span>
      <div className="flex items-center gap-2">
       {product.colors.map((color, index) => (
        <div className={`cursor-pointer border-2 ${productType.color === color ? 'border-gray-400' : 'border-gray-200'} rounded-full p-0.5`} key={index}>
         <div className="w-3.5 h-3.5  rounded-full" style={{ backgroundColor: color }} onClick={() => handleProductTypes({ type: 'color', value: color })}></div>
        </div>
       ))}
      </div>

     </div>

    </div>
    <div className="flex items-center justify-between">
     <p className="font-medium">${product.price.toFixed()}</p>
     <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
      <ShoppingCart className="w-4 h-4 " />
      Add to Cart
     </button>
    </div>
   </div>
  </div>
 );
};

export default ProductCard;
