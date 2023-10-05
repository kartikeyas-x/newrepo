import React, { useEffect, useContext } from "react";
import Header from "components/Header/Header";
import Banner from "components/Banner/Banner";
import Category from "components/Category/Category";
import Product from "components/Product/Product";
import Newsletter from "components/Newsletter/Newsletter";
import Footer from "components/Footer/Footer";
import LoadingIndicator from "components/UI/LoadingIndicator.jsx";
import { AuthContext } from "../contexts/AuthContext.jsx";

const HomePage = () => {

    console.log(process.env.REACT_APP_URL);

    const { products, setProducts } = useContext(AuthContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_URL}/products`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.log("Error fetching products:", error);
        }
    };

    return (
        <div>
            <Header />
            <Banner />
            <Category />

            {products.length === 0 ? (
                <LoadingIndicator />
            ) : (
                <Product products={products} />
            )}

            <Newsletter />
            <Footer />
        </div>
    );

}

export default HomePage;


