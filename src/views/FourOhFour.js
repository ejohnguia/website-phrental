/** @format */

import * as React from "react";
import lightBulb from "../assets/light-bulb.png";

// 404 Page taken from: github.com/mhill426/free404/tree/gh-pages/lights_off

export default function ProductHero() {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: "body{background-color: #26292E; color: #2E2F30; font-family: roboto; margin: 0;} a { color: #fff;} a:hover {color: #e74c3c; } .dialog {    float:right; text-align: left; width: 60%; margin: 5% auto 0;} h1 {font-size: 4em; color: #fff; line-height: 1em; } p { font-size: 1.4em; color: #fff;    padding-right: 5%;} .image { position: absolute; float: right; top: 0; height: 70% width: 60%;} @media only screen and (max-width: 1000px) { .image {      width: 100%; height: auto ;top: -50px; } .dialog { float:none; text-align: center; width: 90%; margin-top: 70% }}",
				}}
			/>
			<img src={lightBulb} className="image" alt="light bulb" />
			<div>
				<div className="dialog">
					<h1>Hey, who turned off the lights?</h1>
					<p>
						We were unable to find the page you were looking for.
						Tap the menu to return.
					</p>
				</div>
			</div>
		</>
	);
}
