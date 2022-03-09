import Countdown from "../Layout/Common/Countdown";
import { HeaderMessage } from '../Layout/Common/Static';
import Menu from '../Layout/Header/Menu';

function Header(props) {
  return (
    <div className="header">
      <Countdown />
      <HeaderMessage />
      <Menu screen={props.screen} setScreen={props.setScreen} />
    </div>
  )
}

export default Header;
