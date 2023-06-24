import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFev } from '../redux/actions/favourit-action';


export const Product = (props) => {
    const dispatch = useDispatch();


    const { id, title, image, price, rating, description } = props.data;

    const onClickHandler = () => {
        dispatch(addToFev(props.data))
    }
    return (
        <>
            <div className="col-sm-3">
                <div className="card card-style">
                <button  onClick={onClickHandler} style={{border:"0px solid white", background:"white"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill fev-style" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
                </button>
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
