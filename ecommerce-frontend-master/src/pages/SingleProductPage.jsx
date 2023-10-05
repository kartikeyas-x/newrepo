import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";
import Header from "components/Header/Header";
import SingleProduct from "components/SingleProduct/SingleProduct";
import Product from "components/Product/Product";
import Newsletter from "components/Newsletter/Newsletter";
import Footer from "components/Footer/Footer";

const SingleProductPage = () => {
    const { id } = useParams();

    const{ user, setUser } = useContext(AuthContext);
    const {products, setProducts } = useContext(AuthContext);
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const { currentId, setCurrentId } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [additionalData, setAdditionalData] = useState(null);

    const URL = `${process.env.REACT_APP_URL}/product/${id}`;

    const URL2 = `${process.env.REACT_APP_URL}/products`;



    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                setProduct(data);
                fetchAdditionalData(data.category); // Trigger the second fetch after setting the product state
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        const fetchAdditionalData = async (category) => {
            try {
                const response = await fetch(URL2);
                const data = await response.json();
                if(products.length === 0){
                    setProducts(data);
                }
                const filteredData = data.filter(
                    (item) => item.category === category && item._id !== id
                );
                const shuffledData = filteredData.sort(() => Math.random() - 0.5);
                const limitedData = shuffledData.slice(0, 4); // Get the first 4 randomly selected products
                setAdditionalData(limitedData);
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };

        fetchProduct();
        scrollToTop();
    }, [id, currentId]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    if (!product || !additionalData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />

            {loggedIn ? (
            
             Object.keys(user).length > 0 && (
             <SingleProduct
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              description={product.description}
              category={product.category}
             /> )
            ) : (
            <SingleProduct
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            description={product.description}
            category={product.category}
            />
            )}
            
            <div className="related-products">RELATED PRODUCTS</div>
            <Product products={additionalData} />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default SingleProductPage;
