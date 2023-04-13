import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    name: "Basic Plan",
    price: "$9.99",
    features: ["50 loads per month", "24/7 support"],
    scale: [1, 1.1],
  },
  {
    name: "Pro Plan",
    price: "$19.99",
    features: ["100 loads per month", "24/7 support", "Route optimization"],
    scale: [1, 1.2],
  },
  {
    name: "Premium Plan",
    price: "$29.99",
    features: [
      "Unlimited loads per month",
      "24/7 support",
      "Route optimization",
      "Dedicated account manager",
    ],
    scale: [1, 1.1],
  },
];

const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "400px",
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
    fontFamily: "roboto",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#333",
  },
  price: {
    fontSize: "3rem",
    fontWeight: "bold",
    fontFamily: "roboto",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#333",
  },
  feature: {
    fontSize: "1.1rem",
    fontWeight: "semibold",
    fontFamily: "sans-serif",
    lineHeight: "1.8rem",
    textAlign: "center",
    color: "#666",
    marginBottom: "0.5rem",
  },
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
