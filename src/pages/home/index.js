import React from "react";
import './home.css'
import Header from "../../components/header/header"
import Main from "../../components/Main/main"
import Footer from "../../components/Footer/footer";
import ControlledCarousel from "../../components/Carrossel/carrossel";

export default function Home() {
    return (
        <div>
            <Header />
            <ControlledCarousel/>
            <Main/>
            <Footer/>
        </div>
     

    )
}