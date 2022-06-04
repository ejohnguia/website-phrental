/** @format */

import * as React from "react";
import ResponsiveAppBar from "../views/ResponsiveAppBar";
import ProductHero from "../views/ProductHero";
import ProductValues from "../views/ProductValues";
import ProductCategories from "../views/ProductCategories";
import ProductHowItWorks from "../views/ProductHowItWorks";
import ImageCarousel from "../views/ImageCarousel";
import ProductSmokingHero from "../views/ProductSmokingHero";
import ProductCTA from "../views/ProductCTA";
import AppFooter from "../views/AppFooter";
import withRoot from "./modules/withRoot";

function Rentals() {
	return (
		<React.Fragment>
			<ResponsiveAppBar />
			<ProductHero />
			<ProductValues />
			<ImageCarousel />
			<ProductCategories />
			<ProductHowItWorks />
			<AppFooter />
		</React.Fragment>
	);
}

export default withRoot(Rentals);
