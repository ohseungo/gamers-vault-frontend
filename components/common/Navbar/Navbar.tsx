import Searchbar from "../Searchbar";
import UserNav from "../UserNav";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <div className="flex-1 flex items-center">
          <div>Logo</div>
        </div>
        <div className="flex-1 flex items-center">
          <Searchbar />
        </div>
        <div className="flex-1 flex items-center justify-end ">
          <UserNav />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
