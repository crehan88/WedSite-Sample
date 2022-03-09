import React, { useState } from 'react';
import Countdown from "../Layout/Common/Countdown";
import SignInForm from '../Layout/SignIn/SignInForm';
import { HeaderMessage, FooterMessage, Button } from '../Layout/Common/Static';


export function SignedOutPage(props) {

    const [openForm, setOpenForm] = useState(false);

    function ToggleForm() {
        setOpenForm(!openForm);
    }

    return (
        <div className="signedOut" >
            <div className="container">
                <Countdown />
                <HeaderMessage />
                {
                    openForm ?
                        <SignInForm setResponse={props.setResponse}
                            setName={props.setName}
                            setEmail={props.setEmail}
                            setAuth={props.setAuth} />
                        :
                        <Button text="Join Us"
                            clickAction={ToggleForm} className="joinButton" />
                }
                <FooterMessage />
            </div>
        </div >
    );
}
