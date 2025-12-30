"use client";

import Link from "next/link";
import { ProductType } from "../types";
import Image from "next/image";

type ProductCardProps = {
 product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
 return (
  <div className="shadow-lg rounded-lg overflow-hidden">
   <Link href={`/product/${product.id}`}></Link>
   <div className="relative aspect-2/3">
    <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 duration-300 transition-all" />
   </div>
  </div>
 );
};

export default ProductCard;
