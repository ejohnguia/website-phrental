/** @format */

import { Routes, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Morong from "./pages/Morong";
import Middle from "./pages/Middle";
import Side from "./pages/Side";
import Error from "./pages/Error";

function App() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/morong" element={<Morong />} />
				<Route exact path="/middle-home" element={<Middle />} />
				<Route exact path="/side-home" element={<Side />} />
				<Route exact path="/contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
