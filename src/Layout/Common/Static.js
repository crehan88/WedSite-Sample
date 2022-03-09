import React from 'react';

export function HeaderMessage() {
  return (
    <div className="header-message">
      <p>Fake Groom</p><p>&</p><p>Fake Bride</p>
    </div>
  );
}

export function FooterMessage() {
  return (
    <div className="footer-message">
      <p className="contact">Having trouble with website? Contact Us at <i>fakewedding@gmail.com</i></p>
      <p className="photocredit">Photo Credit: Fake Photographer - Facebook: @fakephoto Instagram: @fakephotography</p>
    </div>
  );
}

export function Button(props) {

  if (props.type === "submit") {
    return (
      <button className={props.className}
        type="submit"
        disabled={props.disabled}>
        {props.text}
      </button>
    )
  } else {
    return (
      <button className={props.className}
        onClick={props.clickAction}>
        {props.text}
      </button>
    )
  }

}
