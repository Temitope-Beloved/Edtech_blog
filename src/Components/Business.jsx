import React from "react";
import { features } from "../constants";
import  { layout } from "../Style";
import Button from "./Button";
import styles from "../Style";

const Featurecard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}>
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white leading-[23px] text-[18px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite leading-[24px] text-[14px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={`${styles.heading2}`}>
          You do the business <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          with the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money.But with hundreds of
          credit cards on the market.
        </p>

        <Button style="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <Featurecard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
