/** @format */

import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/swiperStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Temp() {
	return (
		<Box
			component="section"
			sx={{
				display: "flex",
				overflow: "hidden",
				bgcolor: "black",
			}}
		>
			<Container
				sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
			>
				<Swiper
					spaceBetween={30}
					centeredSlides={true}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Autoplay, Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
					<SwiperSlide>Slide 8</SwiperSlide>
					<SwiperSlide>Slide 9</SwiperSlide>
				</Swiper>
			</Container>
		</Box>
	);
}

export default Temp;
