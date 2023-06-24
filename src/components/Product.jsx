import React from 'react'
import { Link } from 'react-router-dom';

export const Product = (props) => {
    const { id, title, image, price, rating, description } = props.data;
    return (
        <>
            <div className="col-sm-3">
                <div className="card card-style">
                    <img src={image} alt='' style={{ height: '250px' }} />
                    <div className="card-body">
                        <Link to={'products/'+id}  className="btn">
                        <div>
                            <h6 className="card-title"> <span className='brand-style'>Brand, </span>{title.slice(0, 10)}...</h6>
                            <p className='card-rating-style'>*****, ({rating.count})</p>
                            <p className='card-price-style'>$ <b>{price}</b>.00</p>
                        </div>
                        </Link>
                        <Link to={'products/'+id}  className="btn btn-primary btn-block">Add to Cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
