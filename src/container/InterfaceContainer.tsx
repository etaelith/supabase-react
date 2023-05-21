import styles from "@/styles/interfaces/InterfaceContainer.module.css";
import bill from "@/assets/bill-dollar.svg";
import wallet from "@/assets/wallet-money.svg";
import menu from "@/assets/menu.svg";
import cursorup from "@/assets/cursorup.svg";
import { Outlet, NavLink } from "react-router-dom";
import ChartContainer from "@/components/interface/charts/ChartContainer";
const InterfaceContainer = () => {
  const handleSmooth = () => {
    const amountContainer = document.getElementById("amount");

    amountContainer?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <NavLink to="bills" className={styles.div} onClick={handleSmooth}>
            <h4>Bills</h4>
            <img src={bill}></img>
          </NavLink>
          <NavLink to="menu" className={styles.div} onClick={handleSmooth}>
            <h4>Menu</h4>
            <img src={menu}></img>
          </NavLink>
          <NavLink
            to="amount"
            className={`${styles.bigdiv} ${styles.div}`}
            onClick={handleSmooth}
          >
            <h4>Amount</h4>
            <div>
              <h3>$ 42.852,23</h3>
              <img src={wallet}></img>
            </div>
          </NavLink>
        </div>
        <ChartContainer />
      </header>

      <main id="amount" className={styles.main}>
        <Outlet />

        <img
          src={cursorup}
          className={styles.scrollbutton}
          onClick={scrollToTop}
        />
      </main>
    </div>
  );
};

export default InterfaceContainer;
