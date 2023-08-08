import React from "react";

import Nav from "../../components/organisms/nav";
import Footer from "../../components/organisms/footer";

import "./homePage.scss";

function HomePage() {
    return (
        <div className="homePage">
        <Nav />
        <div className="homePage__content">
            <article
            style={{
                textAlign: "center",
                padding: "5em",
                fontWeight: "normal",
            }}
            >
            <p>
                Application created with Create-React-App. The app uses <i>Sass</i>,{" "}
                <i>Redux</i>, <i>Redux-thunk</i>, <i>React-router-dom</i>,{" "}
                <i>React-modal</i>.
            </p>
            <br />
            <p>Backend created with Express js. Database is a mongoDB.</p>
            <br />
            <p>
                This app is an online shop, in which you can search products by its
                category. You can also add products to your online basket.
            </p>
            </article>
        </div>
        <Footer />
        </div>
    );
}

export default HomePage;
