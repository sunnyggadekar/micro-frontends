import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductById, currency } from "home/products";   

export default function PDPContent() {
    const id = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (id) {
            getProductById(id).then((product) => {
                setProduct(product);
            });
        } else {
            setProduct(null);
        }
    }, [id]);

    if (!product) return null;

    return (<div className="grid grid-cols-2 gap-5">
        <div>

            <div>
                <img src={product.image} alt={product.name}></img>
            </div>

            <div>
                <div className="flex">
                    <h1 className="font-bold text-3xl flex-grow">{product.longDescription}</h1>
                    <div className="font-bold text-3xl flex-end">
                        {currency.format(product.price)}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}