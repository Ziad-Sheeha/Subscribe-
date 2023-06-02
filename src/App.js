import Window from "./components/Window";
import SuccessWindow from "./components/SuccessWindow";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<div className="App">
				<Routes>
					<Route path="/" element={<Window />} />
					<Route path="success" element={<SuccessWindow />} />
				</Routes>
				{/* <Window /> */}
				{/* <SuccessWindow /> */}
			</div>
		</>
	);
}

export default App;
