/** @format */

import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function ProductCTA() {
	return (
		<Container component="section" sx={{ mt: 10, display: "flex" }}>
			<Grid container>
				<Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "warning.main",
							py: 8,
							px: 3,
						}}
					>
						<Box component="form" sx={{ maxWidth: 400 }}>
							<Typography
								variant="h2"
								component="h2"
								gutterBottom
							>
								Contact Info
							</Typography>
							<Typography variant="h4">
								Send us an email!
							</Typography>
							<Typography variant="h5" sx={{ mt: 3 }}>
								Email: g7e4lxoh@anonaddy.me
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={5}
					sx={{
						display: { md: "block", xs: "none" },
						position: "relative",
					}}
				>
					<Box
						sx={{
							position: "absolute",
							top: -67,
							left: -67,
							right: 0,
							bottom: 0,
							width: "100%",
							background:
								"url(/static/themes/onepirate/productCTAImageDots.png)",
						}}
					/>
					<Box
						component="img"
						src="https://images.unsplash.com/photo-1583152607718-1ef10f410528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
						alt="call to action"
						sx={{
							position: "absolute",
							top: -28,
							left: -28,
							right: 0,
							bottom: 0,
							width: "100%",
							maxWidth: 600,
						}}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}

export default ProductCTA;
