import { useNavigate } from "react-router-dom";
import "../Orders/orders.css";

import { Link } from "react-router-dom";

const OrderItems = (props) => {

    const navigate = useNavigate();

    const { orderDate, totalAmount, shipTo, orderId, productDetails } = props;

    const truncateDescription = (description) => {
        if (description.length > 100) {
            return description.substring(0, 400) + "...";
        }
        return description;
    };

   const getItem = (id) => {
      navigate("/product/" + id);
   }

    return (
        <div className="order-item-container">

            <div className="order-item-top">

                <div className="top-details">
                    <div>ORDER PLACED</div>
                    <div className="colon">:</div>
                    <div>{orderDate}</div>
                </div>

                <div className="top-details">
                    <div>TOTAL</div>
                    <div className="colon">:</div>
                    <div>₹{totalAmount}</div>
                </div>

                <div className="top-details">
                    <div>SHIP TO</div>
                    <div className="colon">:</div>
                    <div>{shipTo}</div>
                </div>

                <div className="top-details">
                    <div>ORDER # {orderId}</div>
                    <div className="colon">:</div>
                    <Link style={{ textAlign: "center" }} to='/'>View order details</Link>
                </div>
            </div>

            <div className="order-item-bottom">


                {productDetails.map((product, index) => (

                    <div className="order-item-bottom-container">

                        <div className="order-item-details" onClick={() => getItem(product._id)}>
                            <img src={process.env.REACT_APP_URL + "/" + product.imageUrl} alt="Product" />

                            <div className="item-details-description">
                                <div className="order-details-title">{product.name}</div>
                                <div className="order-details-info">{truncateDescription(product.description)}</div>
                            </div>
                        </div>

                        <div className="order-item-price">

                            <div className="item-price">
                                <div>Price:&nbsp;</div>
                                <div>₹{product.price}</div>
                            </div>

                            <div className="item-quantity">
                                <div>Quantity:&nbsp; </div>
                                <div>{product.quantity}</div>
                            </div>

                        </div>
                    </div>
                ))}

            </div>


            <div className="order-item-total">
                <div className="start">SUBTOTAL : </div>
                <div className="end">₹{totalAmount}</div>
            </div>

        </div>
    );
}

export default OrderItems;








//  {/* <div className="order-item-bottom-container">

//                     <div className="order-item-details">
//                         <img src="https://ecommerce-backend-4zjj.onrender.com/uploads/products/headphone-prod-5.webp" alt="" />

//                         <div className="item-details-description">
//                             <div className="order-details-title">boAt Rockerz 450 DC edition | Wireless Headphone with 40mm Dynamic Driver</div>
//                             <div className="order-details-info">{info}</div>
//                         </div>
//                     </div>

//                     <div className="order-item-price">

//                         <div className="item-price">
//                             <div>Price:&nbsp;</div>
//                             <div>₹2428</div>
//                         </div>

//                         <div className="item-quantity">
//                             <div>Quantity:&nbsp; </div>
//                             <div>2</div>
//                         </div>

//                     </div>
//                 </div> */}
