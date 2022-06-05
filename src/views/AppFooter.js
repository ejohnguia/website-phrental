/** @format */

import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

export default function AppFooter() {
	return (
		<Typography
			component="footer"
			sx={{ display: "flex", bgcolor: "secondary.light" }}
		>
			<Container sx={{ my: 1, display: "flex" }}>
				<Grid container spacing={5}>
					<Grid item>
						<Typography variant="caption">
							{"Photos from "}
							<Link
								href="https://unsplash.com/"
								rel="sponsored"
								title="Unsplash"
							>
								Unsplash
							</Link>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Typography>
	);
}
