import React, { useState } from "react"
import Header from '../Layout/Header';
import Main from '../Layout/Main';
import Footer from '../Layout/Footer';
import { PAGES } from '../Constants';

export default function SignedInPage(props) {

    const [screen, setScreen] = useState(PAGES.WEDDING);

    return (
        <div className="signedIn">
            <Header setScreen={setScreen} screen={screen} />
            <Main screen={screen}
                name={props.name}
                auth={props.auth}
                email={props.email}
                setEmail={props.setEmail}
                setResponse={props.setResponse}
                response={props.response} />
            <Footer />
        </div >
    )
} 
