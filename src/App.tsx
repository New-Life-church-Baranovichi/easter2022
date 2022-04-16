import React from 'react';
import './App.css';
import Header from "./header/Header";
import Prequel from "./prequel/Prequel";
import Questions from "./questions/Questions";
import Evidences from "./evidences/Evidences";
import Contacts from "./contacts/Contacts";
import Ibdn from "./ibdn/Ibdn";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Prequel/>
            <Questions/>
            <Evidences/>
            <Contacts/>
            <Ibdn/>
            <Footer/>
        </div>
    );
}

export default App;
