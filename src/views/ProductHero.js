/** @format */

import * as React from "react";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage =
	// Photo by Alee Catagatan on Unsplash
	"https://images.unsplash.com/photo-1583831256353-e5726aa9bb20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80";

export default function ProductHero() {
	return (
		<ProductHeroLayout
			sxBackground={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundPosition: "center",
			}}
		>
			<img
				style={{ display: "none" }}
				src={backgroundImage}
				alt="increase priority"
			/>
			<Typography
				color="inherit"
				align="center"
				variant="h2"
				marked="center"
			>
				Sky Homes
			</Typography>
			<Typography
				color="inherit"
				align="center"
				variant="h5"
				sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
			>
				Morong, Bataan
			</Typography>
			<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
				Rent a home with Sky Homes
			</Typography>
		</ProductHeroLayout>
	);
}
