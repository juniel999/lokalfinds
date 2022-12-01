import FoodSection from "./components/FoodSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ClothingSection from "./components/ClothingSection";
import Accessories from "./components/Accessories";
import MoreSection from "./components/MoreSection";
import LookingFor from "./components/LookingFor";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<AboutSection />}></Route>
				<Route path="foods" element={<FoodSection />}></Route>
				<Route path="clothing" element={<ClothingSection />}></Route>
				<Route path="accessories" element={<Accessories />}></Route>
				<Route path="more" element={<MoreSection />}></Route>
				<Route path="lookingfor" element={<LookingFor />}></Route>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
