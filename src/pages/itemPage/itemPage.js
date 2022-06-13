import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import actions from "../../redux/product/actions";
import Nav from "../../components/organisms/nav";
import LoaderExample from "../../components/atoms/loader";
import ItemContent from "../../components/organisms/itemContent";
import Footer from "../../components/organisms/footer";

import "./itemPage.scss";

const ItemPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.product);
    const { isLoading, product } = state;

    useEffect(() => {
        dispatch(actions.ProductFetch(params._id));
    }, [dispatch, params._id]);

    return (
        <div className="itemPage">
        <Nav />
        <div className="itemPage--frame">
            {isLoading ? <LoaderExample /> : <ItemContent product={product} />}
        </div>
        <Footer />
        </div>
    );
};

export default ItemPage;
