/** @format */

import * as React from "react";
import ResponsiveAppBar from "../views/ResponsiveAppBar";
import ProductHero from "../views/ProductHero";
import ProductValues from "../views/ProductValues";
import ProductCategories from "../views/ProductCategories";
import ProductHowItWorks from "../views/ProductHowItWorks";
import ProductSmokingHero from "../views/ProductSmokingHero";
import ProductCTA from "../views/ProductCTA";
import AppFooter from "../views/AppFooter";
import withRoot from "./modules/withRoot";

function Index() {
	return (
		<React.Fragment>
			<ResponsiveAppBar />
			{/* <ProductHero />
			<ProductValues />
			<ProductCategories />
			<ProductHowItWorks />
			<ProductCTA />
			<ProductSmokingHero />
			<AppFooter /> */}
		</React.Fragment>
	);
}

export default withRoot(Index);
