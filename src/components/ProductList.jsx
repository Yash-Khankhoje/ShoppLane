import React, { useState, useEffect} from 'react';
import axios from 'axios';
import EndPoints from '../api/EndPoints';
import { Product } from './Product';
import { Navbar } from './Navbar';
import { CategoryList } from './CategoryList';
// import { Link } from 'react-router-dom';

export const ProductList = () => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get(EndPoints.PRODUCTS_LIST_URL)
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className='container'>
                <div className="row">
                    {
                        products.map((product)=><Product data={product} />)
                    }
                </div>

            </div>
        </>
    )
}
