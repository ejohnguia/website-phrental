/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	background: "#000",
	opacity: 0.5,
	transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
	position: "relative",
	display: "block",
	padding: 0,
	borderRadius: 0,
	height: "40vh",
	[theme.breakpoints.down("md")]: {
		width: "100% !important",
		height: 100,
	},
	"&:hover": {
		zIndex: 1,
	},
	"&:hover .imageBackdrop": {
		opacity: 0.15,
	},
	"&:hover .imageMarked": {
		opacity: 0,
	},
	"&:hover .imageTitle": {
		border: "4px solid currentColor",
	},
	"& .imageTitle": {
		position: "relative",
		padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
	},
	"& .imageMarked": {
		height: 3,
		width: 18,
		background: theme.palette.common.white,
		position: "absolute",
		bottom: -2,
		left: "calc(50% - 9px)",
		transition: theme.transitions.create("opacity"),
	},
}));

const images = [
	{
		url: "https://images.unsplash.com/photo-1595668609762-430ca2cc3af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		title: "Las Casas Filipinas de Acuzar",
		width: "40%",
		link: "https://www.lascasasfilipinas.com/",
	},
	{
		url: "https://images.unsplash.com/photo-1653625605718-61f702664b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Shrine of Valor",
		width: "20%",
		link: "https://tieza.gov.ph/mt-samat-shrine-bataan/",
	},
	{
		url: "https://images.unsplash.com/photo-1611944596304-f5b4930e84f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
		title: "Beaches",
		width: "40%",
		link: "https://www.tripadvisor.ca/Attraction_Review-g1202576-d13813658-Reviews-Morong_Beach-Sabtang_Island_Province_of_Batanes_Cagayan_Valley_Region_Luzon.html",
	},
	{
		url: "https://images.unsplash.com/photo-1539575341842-4585003ee59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
		title: "Corregidor Island",
		width: "38%",
		link: "https://corregidorisland.com.ph/",
	},
	{
		url: "https://images.unsplash.com/photo-1581345357822-5e482149d0b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		title: "Pawikan Conservation Center",
		width: "38%",
		link: "https://www.bataan.gov.ph/behold-bataan/pawikan-conservation-center/",
	},
	{
		url: "https://images.unsplash.com/photo-1548585219-8eb7c1801390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
		title: "Market",
		width: "24%",
		link: null,
	},
	{
		url: "https://images.unsplash.com/photo-1505185166728-2c573eee20ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
		title: "Bataan World War II Museum",
		width: "40%",
		link: "https://www.nationalww2museum.org/events-programs/educational-travel/world-war-ii-philippines/march-2022",
	},
	{
		url: "https://images.unsplash.com/photo-1596789592210-e2e93ff08bc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "Tricycle Access",
		width: "20%",
		link: null,
	},
	{
		url: "https://images.unsplash.com/photo-1593870682262-8c9f6a9bb225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		title: "Street Food",
		width: "40%",
		link: null,
	},
];

export default function ProductCategories() {
	return (
		<Container component="section" sx={{ mt: 8, mb: 4 }}>
			<Typography
				variant="h4"
				marked="center"
				align="center"
				component="h2"
			>
				All that Morong can offer
			</Typography>
			<Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
				{images.map((image) => (
					<ImageIconButton
						onClick={() => {
							if (image.link) {
								window.open(image.link, "_blank");
							}
						}}
						key={image.title}
						style={{
							width: image.width,
						}}
					>
						<Box
							sx={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								backgroundSize: "cover",
								backgroundPosition: "center 40%",
								backgroundImage: `url(${image.url})`,
							}}
						/>
						<ImageBackdrop className="imageBackdrop" />
						<Box
							sx={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								color: "common.white",
							}}
						>
							<Typography
								component="h3"
								variant="h6"
								color="inherit"
								className="imageTitle"
							>
								{image.title}
								<div className="imageMarked" />
							</Typography>
						</Box>
					</ImageIconButton>
				))}
			</Box>
		</Container>
	);
}
