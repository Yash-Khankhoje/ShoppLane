import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import EndPoints from '../api/EndPoints';
import { Navbar } from '../components/Navbar';
import { CategoryList } from '../components/CategoryList';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cart-actions';

export const ProductDetailsPage = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});

    const getProduct = () => {
        axios.get(EndPoints.PRODUCTS_LIST_URL + id)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getProduct()
    }, [id])

    const onClickHandler = () => {
        dispatch(addToCart(product))
    }

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md6">
                            <img src={product.image} alt="" className="img-fluid" style={{ height: '250px', width: '200px' }}/>
                        </div>
                        <div className="col-md-6" style={{ marginLeft: '10%' }}>
                            <h5>{product.title}</h5>
                            <p>{product.description}</p>
                            <h2>
                                <span>$</span>{product.price}
                            </h2>
                            <button className="btn btn-primary" onClick={onClickHandler}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
