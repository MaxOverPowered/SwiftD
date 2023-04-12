import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  price: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
});

const PricingSection = () => {
  const classes = useStyles();

  return (
    <section className="flex justify-center">
      <motion.div
        className="flex flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex"
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title}>Basic Plan</Typography>
              <Typography className={classes.price}>$9.99</Typography>
              <Typography variant="body2" component="p">
                50 loads per month
                <br />
                24/7 support
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex"
        >
          <Card className={`${classes.root} lg:w-96`}>
            <CardContent>
              <Typography className={classes.title}>Pro Plan</Typography>
              <Typography className={classes.price}>$19.99</Typography>
              <Typography variant="body2" component="p">
                100 loads per month
                <br />
                24/7 support
                <br />
                Route optimization
              </Typography>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex"
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title}>Premium Plan</Typography>
              <Typography className={classes.price}>$29.99</Typography>
              <Typography variant="body2" component="p">
                Unlimited loads per month
                <br />
                24/7 support
                <br />
                Route optimization
                <br />
                Dedicated account manager
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
