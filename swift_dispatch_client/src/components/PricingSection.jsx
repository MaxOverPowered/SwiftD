import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// eslint-disable-next-line no-unused-vars
import truck_element from "../company_Icon/new/truck_element.png";


const plans = [
  {
    name: "Car hauling dispatch service",
    price: "from %per Gross",
    features: ["2+years dispatch", "Keep company healthy","support in 3 languages","Route optimization","Best possible rates on the route","Good Communication with Drivers and Brokers !","appointment at pickup and delivery !"],
    scale: [1, 1.1],
  },
  {
    name: "Billing & Accounting",
    price: " from %per Gross",
    features: ["Documentation", "24/7 support", ],
    scale: [1, 1.2],
  },
  {
    name: "Logbook",
    price: "from $99.99",
    features: [
      "Ensuring compliance with the HOS regulations is a challenging task for any company, but it's one that we've been successfully managing for years. Even back when drivers were still using paper logs, we were dedicated to ensuring full compliance. With our expert team, you can trust that your drivers will always follow the latest HOS rules and regulations",
      "24/7 support",
      "Route optimization",
    ],
    scale: [1, 1.1],
  },
];

const useStyles = makeStyles({
  card: {
    backgroundImage: `url(${truck_element})`,
      backgroundColor: "#FFFFF",
    width: "600px",
    height: "450px",
    borderRadius: "20px",
    padding: "1.5rem",
    margin: "1.2rem",
    boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    },
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    fontFamily: "Roboto, sans-serif",
    marginBottom: "1rem",
    textAlign: "center",
    textDecoration:"underline",
    color: "#1B5E20",
  },
  price: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily:  "Roboto, sans-serif",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#1B5E20",
  },
  feature: {
    fontSize: "1.1rem",
    fontWeight: "semibold",
    marginLeft: "1.5rem",
    fontFamily: "Roboto, sans-serif",
    lineHeight: "1.8rem",
    textAlign: "left",
    color: "#666",
    marginBottom: "0.5rem",
    listStyleType: "disc",
    display: "list-item",
  }
,
});

const PricingSection = () => {
  const classes = useStyles();
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    console.log("inView:", inView);
  }, [inView]);

  return (
    <section className="flex justify-center">
      <motion.div
        className="flex flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.75 }}
        ref={ref}
      >
        {plans.map((plan, index) => (
          <motion.div key={index} className="flex">
            <Card
              className={classes.card}
              style={{ boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)" }}
            >
              <CardContent>
                <Typography className={classes.title} component="h2">
                  {plan.name}
                </Typography>
                <Typography className={classes.price} component="h3">
                  {plan.price}
                </Typography>
                {plan.features.map((feature, index) => (
                  <Typography key={index} className={classes.feature}>
                    {feature}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default PricingSection;
