import Searchbar from "../Searchbar";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <div className="flex-1">Logo</div>
        <div className="flex-1">
          <Searchbar />
        </div>
        <div className="flex-1">Navbar</div>
      </div>
    </div>
  );
};

export default Navbar;
