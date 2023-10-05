import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "contexts/AuthContext";
import OrderItems from "./OrderItems";

const Orders = () => {

    const { user, setUser } = useContext(AuthContext);

    let orders;

    if (user.orders) {
        orders = user.orders;
    }

    return (
        <div className="orders-container">
            {orders.length === 0 && <Link to="/" style={{ margin: "auto", fontFamily: "Roboto", fontSize: "2rem", fontWeight: "bolder", color: "#8e2de2" }}>No Orders Yet</Link>}

            {orders.map((order, index) => (
                <OrderItems
                    key={index}
                    orderId={order.orderId}
                    orderDate={order.orderDate}
                    totalAmount={order.totalAmount}
                    shipTo={user.fName + " " + user.lName}
                    productDetails={order.productDetails}
                />
            ))}
        </div>
    );
}

export default Orders;
