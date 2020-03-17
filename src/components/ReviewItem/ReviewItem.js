import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);

    const {name,quantity, key, price}= props.product;

    const reviewIemStyle={
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    };
    return (
        <div style={reviewIemStyle} className="review-item">
            <h4 className="product-name">{name}}</h4>
            <p>Quantity:{quantity} </p>
            <p><small>$ {price}</small></p>
            <br/>
            <button className="main-button"
                onClick={()=>props.RemoveProduct(key)}>
                Remove </button>
        </div>
    );
};

export default ReviewItem;