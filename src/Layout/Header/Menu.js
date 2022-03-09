import React from 'react';
import { PAGES } from '../../Constants';

function Menu(props) {

  return (<div className="options">
    <p className={props.selection === PAGES.WEDDING ? "selected" : null}
      onClick={() => props.setScreen(PAGES.WEDDING)}>Wedding</p>
    <p className={props.selection === PAGES.TRAVEL ? "selected" : null}
      onClick={() => props.setScreen(PAGES.TRAVEL)}>Travel</p>
    <p className={props.selection === PAGES.RSVP ? "selected" : null}
      onClick={() => props.setScreen(PAGES.RSVP)}>RSVP</p>
  </div>);
}

export default Menu;

