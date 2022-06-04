/** @format */

import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

// Icons
import LandscapeIcon from "@mui/icons-material/Landscape";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";

const item = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	px: 5,
};

function ProductValues() {
	return (
		<Box
			component="section"
			sx={{
				display: "flex",
				overflow: "hidden",
				bgcolor: "secondary.light",
			}}
		>
			<Container
				sx={{ mt: 10, mb: 10, display: "flex", position: "relative" }}
			>
				<Box
					component="img"
					src="/static/themes/onepirate/productCurvyLines.png"
					alt="curvy lines"
					sx={{
						pointerEvents: "none",
						position: "absolute",
						top: -180,
					}}
				/>
				<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
							<LandscapeIcon fontSize="large" />
							<Typography variant="h6" sx={{ my: 5 }}>
								Overlooking View
							</Typography>
							<Typography variant="h5">
								{
									"From up on the hill, you'll be able to see all of Morong."
								}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
							<CorporateFareIcon fontSize="large" />
							<Typography variant="h6" sx={{ my: 5 }}>
								Aspiring Location
							</Typography>
							<Typography variant="h5">
								{
									"Future location for the new university as well as the new hospital."
								}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box sx={item}>
							<DirectionsCarFilledIcon fontSize="large" />
							<Typography variant="h6" sx={{ my: 5 }}>
								Parking Included
							</Typography>
							<Typography variant="h5">
								{"One outdoor vehicle parking space."}
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default ProductValues;
