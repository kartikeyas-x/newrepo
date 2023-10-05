import { useContext } from "react"
import Header from "components/Header/Header"
import Orders from "components/Orders/Orders"
import Newsletter from "components/Newsletter/Newsletter"
import Footer from "components/Footer/Footer"
import { AuthContext } from "contexts/AuthContext"
import LoadingIndicator from "components/UI/LoadingIndicator"

const OrdersPage = () => {

    const { user, setUser } = useContext(AuthContext);

    return (
        <div>
            <Header />

            { Object.keys(user).length > 0 ?
                <Orders />
                :
                <LoadingIndicator />
            }

            <Newsletter />
            <Footer />
        </div>
    )
}

export default OrdersPage;
