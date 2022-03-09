import RSVPform from './Rsvp/RsvpForm';
import RsvpAdmin from './Rsvp/RsvpAdmin';
import RsvpClosed from './Rsvp/RsvpClosed';
import React, { useState, useEffect } from 'react';

export default function RSVP(props) {

    const [openRsvpForm, setOpenRsvpForm] = useState(false);

    function toggleForm() {
        setOpenRsvpForm(!openRsvpForm);
    }

    useEffect(() => {
        if (props.response === "maybe") setOpenRsvpForm(true);
    }, [props.response])

    return (
        < div className="rsvp" >
            {
                props.name === "admin" ?
                    <RsvpAdmin auth={props.auth} />
                    : openRsvpForm ?
                        <RSVPform auth={props.auth}
                          name={props.name}
                          email={props.email}
                          setEmail={props.setEmail}
                            response={props.response}
                            toggleForm={toggleForm}
                            setResponse={props.setResponse} />
                        : <RsvpClosed toggleForm={toggleForm} />
            }
        </div >
    );
}
