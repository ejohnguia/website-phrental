/** @format */

import * as React from "react";
import ResponsiveAppBar from "../views/ResponsiveAppBar";
import FourOhFour from "../views/FourOhFour";
import withRoot from "./modules/withRoot";

function Error() {
	return (
		<>
			<ResponsiveAppBar />
			<FourOhFour />
		</>
	);
}

export default withRoot(Error);
