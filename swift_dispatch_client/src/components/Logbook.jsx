import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Fade from "react-reveal/Fade";
import { useState } from "react";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      maxWidth: "800px",
    },
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  accordion: {
    width: "100%",
    backgroundColor: "#F7F7F7",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    marginBottom: theme.spacing(2),

    "&::before": {
      backgroundColor: "transparent",
    },
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  content: {
    marginRight: theme.spacing(2),
    flex: 1,
  },
  price: {
    minWidth: "fit-content",
    paddingLeft: theme.spacing(3),
    borderLeft: "1px solid #E0E0E0",
  },
}));

export default function Logbook() {
  const classes = useStyles();

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Fade>
      <div className={classes.root}>
        <Container>
          <Typography variant="h3" className={classes.title}>
            Logbook
          </Typography>
          <Box my={2}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>
                      Accordion 1
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    <div className={classes.content}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addToCart("Item 1")}
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <div className={classes.price}>
                      <Typography variant="h6">$9.99</Typography>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>
                      Accordion 2
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    <div className={classes.content}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addToCart("Item 1")}
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <div className={classes.price}>
                      <Typography variant="h6">$12.99</Typography>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                  >
                    <Typography className={classes.heading}>
                      Accordion 3
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.details}>
                    <div className={classes.content}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => addToCart("Item 1")}
                      >
                        Add to Cart
                      </Button>
                    </div>
                    <div className={classes.price}>
                      <Typography variant="h6">$8.99</Typography>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </Fade>
  );
}
