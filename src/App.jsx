import React from "react";
import styles from "./Style";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./Components";


const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* NAvigation Bar components */}
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          </div>
      </div>

      {/* Banner  components*/}
      <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
          </div>
      </div>

      <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          < Billing />
          <CardDeal/>
          < Testimonials/>
          < Clients/>
          < CTA/>
          < Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;
