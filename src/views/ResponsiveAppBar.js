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
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return React.createElement(
		AppBar,
		{ position: "static" },
		React.createElement(
			Container,
			{ maxWidth: "xl" },
			React.createElement(
				Toolbar,
				{ disableGutters: true },
				React.createElement(AdbIcon, {
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
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						},
					},
					"LOGO"
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
				React.createElement(AdbIcon, {
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
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						},
					},
					"LOGO"
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
					React.createElement(
						Tooltip,
						{ title: "Open settings" },
						React.createElement(
							IconButton,
							{ onClick: handleOpenUserMenu, sx: { p: 0 } },
							React.createElement(Avatar, {
								alt: "Remy Sharp",
								src: "/static/images/avatar/2.jpg",
							})
						)
					),
					React.createElement(
						Menu,
						{
							sx: { mt: "45px" },
							id: "menu-appbar",
							anchorEl: anchorElUser,
							anchorOrigin: {
								vertical: "top",
								horizontal: "right",
							},
							keepMounted: true,
							transformOrigin: {
								vertical: "top",
								horizontal: "right",
							},
							open: Boolean(anchorElUser),
							onClose: handleCloseUserMenu,
						},
						settings.map((setting) =>
							React.createElement(
								MenuItem,
								{ key: setting, onClick: handleCloseUserMenu },
								React.createElement(
									Typography,
									{ textAlign: "center" },
									setting
								)
							)
						)
					)
				)
			)
		)
	);
};
export default ResponsiveAppBar;
