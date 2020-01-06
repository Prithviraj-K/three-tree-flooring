import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import EcoIcon from '@material-ui/icons/Eco';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import BuildIcon from '@material-ui/icons/Build';

import FSCLogo from "../../assets/img/FSC.png";
import osmoLogo from "../../assets/img/osmo-logo.png"

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import NavPills from "../NavPills/NavPills.js";
import Button from "../CustomButtons/Button.js";

import styles from "./pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
        <GridContainer>
          <GridItem xs={12} s={12} md={12} lg={12}>
            <div className={classes.title}>
              <h2 style={{color: "black"}}>Why Choose Three Trees?</h2>
            </div>
              <NavPills
                color="primary"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Hardwax Oil Finishing",
                    tabIcon: FormatColorFillIcon,
                    tabContent: (
                      <span>
                        <p>
                          Osmo® Hardwax-Oil is trusted world-wide for its quality reputation.
                          Hardwax Oil soaks in, lightly colors the wood and forms a protective film 
                          on the surface of the wood. wood finish that is derived from natural vegetable 
                          oils and waxes. Resistant to water, dirt, beer, wine, cola and saliva, Osmo 
                          Polyx-Oil is microporous and molecularly bonds with the wood, meaning it does 
                          not crack, flake, peel or blister. Can be spot-repaired and/or restored/renewed 
                          with no sanding required, therefore wood never needs complete sanding and 
                          refinishing again.
                          <div style={{padding: "0",margin: "0", textAlign: "center"}}>
                            <img src={osmoLogo} alt="Osmo"/>
                          </div>
                        </p>
                        <div style={{padding: "0",margin: "0", textAlign: "center"}}>
                            <Button
                              color="primary"
                              round
                              href="https://osmo.ca/"
                            >
                              Visit Osmo®
                            </Button>
                          </div>
                      </span>
                    )
                  },
                  {
                    tabButton: "Eco-friendly & FSC Certified",
                    tabIcon: EcoIcon,
                    tabContent: (
                      <span>
                        <p style={{marginBottom: "0", padding: "0"}}>
                          Three Trees Flooring’s Eco-Friendly promise starts from the raw material to the finish of our flooring.
                          Our flooring is imported unfinished directly from Europe. We use only the highest quality white oak to 
                          produce our flooring sourcing the wood directly from FSC certified (Forest Stewardship Council) forests 
                          of Europe. Three Trees Flooring strives to provide a sustainable, eco-friendly, durable and stylish 
                          hardwood flooring option.
                          <div style={{padding: "0",margin: "0", textAlign: "center"}}>
                            <img src={FSCLogo} alt="FSC"/>
                          </div>
                        </p>
                          <div style={{padding: "0",margin: "0", textAlign: "center"}}>
                            <Button
                              color="primary"
                              round
                              href="https://ca.fsc.org/en-ca"
                            >
                              Visit FSC
                            </Button>
                          </div>
                      </span>
                    )
                  },
                  {
                    tabButton: "Maintenance & Care",
                    tabIcon: BuildIcon,
                    tabContent: (
                      <span>
                        <p>
                          Three Tree products are easy to take care of. Hardwood flooring can last a lifetime if maintained
                          properly. The key to successfully keep your flooring in the best shape is to ensure care and
                          maintenance is carried throughout the life of the hardwood. The process begins at Three Tree.
                          <div style={{padding: "0",marginTop: "1em",marginBottom: "0", textAlign: "center"}}>
                            <Button
                              color="primary"
                              round
                            >
                              More Maintenance Information
                            </Button>
                          </div>
                        </p>
                        <br/>
                        {/*<p>
                          Humidity Levels: Changes in humidity levels can cause any wood flooring to shrink or expand. In order 
                          to minimize such movement it is important to maintain the humidity level in your home between 45% and 
                          60%. Improper humidity levels can result in cracking, delaminating and shifting of flooring.
                        </p>
                        <br/>
                        <p>
                          Liquids & Spills: Although the OSMO UV-POLYX OIL finish is highly resistant against liquids we do recommend 
                          that all liquids and spills should be wiped off as soon as possible in order to prevent any damage. You may 
                          consider using area rugs to protect susceptible areas (around kitchen sink, at entrance for wet 
                          footwear, etc.).
                        </p>
                        <br/>
                        <p>
                          Protection: Abrasive dirt such as sand, street dirt, grit and cat litter can damage any hardwood floor. 
                          Protect your floor by using entrance mats and area rugs. Regular cleaning or vacuuming of these rugs will 
                          prevent accumulation of dirt. Felt protectors under the legs of all pieces of furniture will prevent damage 
                          caused by scratching.
                        </p>
                        <br/>
                        <p>
                          Cleaning Products
                          For best results, we recommend the use of Osmo specially formulated wood care and maintenance products for 
                          Osmo Poly-x Oil.
                        </p>*/}
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            {/*<GridItem xs={12} s={12} md={6} lg={6}>
                <div className={classes.imgHome}>
                
                </div>
              </GridItem>*/}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
