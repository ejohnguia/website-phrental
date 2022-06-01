/** @format */

import * as React from "react";
import ResponsiveAppBar from "../views/ResponsiveAppBar";
import ProductHero from "../views/ProductHero";
import ProductSmokingHero from "../views/ProductSmokingHero";
import ProductCTA from "../views/ProductCTA";
import AppFooter from "../views/AppFooter";
import withRoot from "./modules/withRoot";

function Contact() {
	return (
		<React.Fragment>
			<ResponsiveAppBar />
			<ProductHero />
			<ProductSmokingHero />
			<ProductCTA />
			<AppFooter />
		</React.Fragment>
	);
}

export default withRoot(Contact);
