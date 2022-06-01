/** @format */

import * as React from "react";
import lightBulb from "../assets/light-bulb.png";

// 404 Page taken from: github.com/mhill426/free404/tree/gh-pages/lights_off

export default function ProductHero() {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: "\n  body{\n    background-color: #26292E;\n color: #2E2F30;\n    font-family: sans-serif;\n    margin: 0;\n  }\n\n a {\n    color: #fff;\n  }\n\n  a:hover {\n    color: #e74c3c;\n  }\n\n  .dialog {\n    float:right;\n    text-align: left;\n    width: 60%;\n    margin: 5% auto 0;\n  }\n\n  h1 { \n    font-size: 4em;\n    color: #fff;\n    line-height: 1em;\n  }\n\n  p {\n    font-size: 1.4em;\n    color: #fff;\n    padding-right: 5%;\n  }\n  .image {\n    position: absolute;\n    float: right;\n    top: 0;\n    height: 70% width:60%;\n  }\n  @media only screen and (max-width: 1000px) {\n    .image {\n      width: 100%;\n      top: -50px;\n    }\n    .dialog {\n    float:none;\n    text-align: center;\n    width: 90%;\n    margin-top: 70%\n  }\n  }  \n  ",
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
