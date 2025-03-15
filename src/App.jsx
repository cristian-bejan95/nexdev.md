import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
function App() {
	return (
		<div>
			<div className="container flex flex-col items-start justify-center h-screen gap-10 p-5 mx-auto">
				<div className="flex flex-col gap-2">
					<div className="flex items-center">
						<div href="/" className="logo">
							<img src="./images/nexdev.svg" width={130} alt="" />
						</div>
						<h1 className="title">NexDev</h1>
					</div>
					<p className="descr">Web Development and Maintenance.</p>
				</div>
				<div className="flex flex-col gap-3 text-white">
					<a href="tel:37368589463" className="relative flex items-center gap-3 text-xl transition duration-200 hover:translate-x-3">
						<FaPhoneAlt />
						+373 68 589 463
					</a>
					<a href="mailto:support@nexdev.md" className="relative flex items-center gap-3 text-xl transition duration-200 hover:translate-x-3">
						<FaEnvelope />
						support@nexdev.md
					</a>
					<a href="https://www.instagram.com/nexdev.md/" className="relative flex items-center gap-3 text-xl transition duration-200 hover:translate-x-3">
						<FaInstagram />
						nexdev.md
					</a>
				</div>
			</div>
		</div>
	)
}

export default App