import Button from "../General/button/Button";
import Search from "../search/Search";
import styles from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={styles.container}>
        <lable>{props.title}</lable>
    <Search/>
    <Button title="Add"/>
    </div>
  );
};
export default Header;
