/** @format */

import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { useNavigate } from "react-router-dom";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import ListAltIcon from "@mui/icons-material/ListAlt";

const item = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	px: 5,
};

const number = {
	fontSize: 24,
	fontFamily: "default",
	color: "secondary.main",
	fontWeight: "medium",
};

const image = {
	height: 55,
	my: 4,
};

function ProductHowItWorks() {
	const navigate = useNavigate();

	return (
		<Box
			component="section"
			sx={{
				display: "flex",
				bgcolor: "secondary.light",
				overflow: "hidden",
			}}
		>
			<Container
				sx={{
					mt: 10,
					mb: 15,
					position: "relative",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Box
					component="img"
					src="/static/themes/onepirate/productCurvyLines.png"
					alt="curvy lines"
					sx={{
						pointerEvents: "none",
						position: "absolute",
						top: -180,
						opacity: 0.7,
					}}
				/>
				<Typography
					variant="h4"
					marked="center"
					component="h2"
					sx={{ mb: 14 }}
				>
					How it works
				</Typography>
				<div>
					<Grid container spacing={5}>
						<Grid item xs={12} md={4}>
							<Box sx={item}>
								<Box>
									<EmailIcon fontSize="large" />
								</Box>
								<Typography variant="h5" align="center">
									Send us an email to inquire for availability
									and interest.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} md={4}>
							<Box sx={item}>
								<Box>
									<QuestionAnswerIcon fontSize="large" />
								</Box>
								<Typography variant="h5" align="center">
									We will discuss in details with you and show
									around the area.
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} md={4}>
							<Box sx={item}>
								<Box>
									<ListAltIcon fontSize="large" />
								</Box>
								<Typography variant="h5" align="center">
									If you are interested, you will be added to
									the list of applicants.
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</div>
				<Button
					color="secondary"
					size="large"
					variant="contained"
					component="a"
					onClick={() => navigate("/contact")}
					sx={{ mt: 8 }}
				>
					Contact us
				</Button>
			</Container>
		</Box>
	);
}

export default ProductHowItWorks;
