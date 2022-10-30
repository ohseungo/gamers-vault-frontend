import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <div>Logo</div>
        <div>Navbar here</div>
      </div>
    </div>
  );
};

export default Navbar;
