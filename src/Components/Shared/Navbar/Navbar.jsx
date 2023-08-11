import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";

const Navbar = () => {
	const menu = (
		<>
			<div className="lg:flex text-2xl">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/courses">Courses</Link>
				</li>
				<li>
					<Link href="/blogs">Blogs</Link>
				</li>
				<li>
					<Link href="/login">Login</Link>
				</li>
			</div>
		</>
	);
	return (
		<div className="navbar z-50 pt-10 pb-20 lg:w-3/4 mx-auto">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menu}
					</ul>
				</div>
				<a className="btn btn-ghost normal-case text-xl md:text-4xl text-[#0083db]">
					ED_NEXUS
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 mt-3">{menu}</ul>
			</div>
			<div className="navbar-end">
				<div className="dropdown dropdown-end">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar bg-[#0083db] mr-3"
					>
						<div className="w-10 rounded-full">
							<FaUserGraduate className="flex justify-center items-center text-white text-xl ml-[10px] mt-[10px]" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
