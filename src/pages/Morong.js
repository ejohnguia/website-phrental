/** @format */

import * as React from "react";
import ResponsiveAppBar from "../views/ResponsiveAppBar";
import ProductHero from "../views/ProductHero";
import ProductCategories from "../views/ProductCategories";
import AppFooter from "../views/AppFooter";
import withRoot from "./modules/withRoot";

function Morong() {
	return (
		<React.Fragment>
			<ResponsiveAppBar />
			<ProductHero />
			<ProductCategories />
			<AppFooter />
		</React.Fragment>
	);
}

export default withRoot(Morong);
