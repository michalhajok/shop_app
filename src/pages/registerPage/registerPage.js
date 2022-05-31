import React from "react";

import Nav from "../../components/organisms/nav";
import Footer from "../../components/organisms/footer";
import RegisterForm from "../../components/organisms/registerForm/registerForm";

import "./registerPage.scss";

const RegisterPage = () => (
    <div className="registerPage">
        <Nav />
        <RegisterForm />
        <Footer />
    </div>
);

export default RegisterPage;
