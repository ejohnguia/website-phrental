/** @format */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

// Import fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Setting up the routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Morong from "../pages/Morong";
import Rent1 from "../pages/Rent1";
import Rent2 from "../pages/Rent2";

const title = "Sky";
const pages = ["Morong", "Middle Home", "Side Home", "Contact"];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return React.createElement(
		AppBar,
		{ position: "sticky" },
		React.createElement(
			Container,
			{ maxWidth: "xl" },
			React.createElement(
				Toolbar,
				{ disableGutters: true },
				React.createElement(FilterDramaIcon, {
					sx: { display: { xs: "none", md: "flex" }, mr: 1 },
				}),
				React.createElement(
					Typography,
					{
						variant: "h6",
						noWrap: true,
						component: "a",
						href: "/",
						sx: {
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "roboto",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						},
					},
					title
				),
				React.createElement(
					Box,
					{
						sx: {
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						},
					},
					React.createElement(
						IconButton,
						{
							size: "large",
							"aria-label": "account of current user",
							"aria-controls": "menu-appbar",
							"aria-haspopup": "true",
							onClick: handleOpenNavMenu,
							color: "inherit",
						},
						React.createElement(MenuIcon, null)
					),
					React.createElement(
						Menu,
						{
							id: "menu-appbar",
							anchorEl: anchorElNav,
							anchorOrigin: {
								vertical: "bottom",
								horizontal: "left",
							},
							keepMounted: true,
							transformOrigin: {
								vertical: "top",
								horizontal: "left",
							},
							open: Boolean(anchorElNav),
							onClose: handleCloseNavMenu,
							sx: {
								display: { xs: "block", md: "none" },
							},
						},
						pages.map((page) =>
							React.createElement(
								MenuItem,
								{ key: page, onClick: handleCloseNavMenu },
								React.createElement(
									Typography,
									{ textAlign: "center" },
									page
								)
							)
						)
					)
				),
				React.createElement(FilterDramaIcon, {
					sx: { display: { xs: "flex", md: "none" }, mr: 1 },
				}),
				React.createElement(
					Typography,
					{
						variant: "h5",
						noWrap: true,
						component: "a",
						href: "",
						sx: {
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "roboto",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							textTransform: "uppercase",
						},
					},
					title
				),
				React.createElement(
					Box,
					{
						sx: {
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						},
					},
					pages.map((page) =>
						React.createElement(
							Button,
							{
								key: page,
								onClick: handleCloseNavMenu,
								sx: { my: 2, color: "white", display: "block" },
							},
							page
						)
					)
				),
				React.createElement(
					Box,
					{ sx: { flexGrow: 0 } },
					React.createElement(Menu, {
						sx: { mt: "45px" },
						id: "menu-appbar",
						anchorOrigin: {
							vertical: "top",
							horizontal: "right",
						},
						keepMounted: true,
						transformOrigin: {
							vertical: "top",
							horizontal: "right",
						},
					})
				)
			)
		)
	);
};
export default ResponsiveAppBar;
