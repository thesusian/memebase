import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Menu, Xmark } from "iconoir-react";
import classes from "./Header.module.scss";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const menuToggleHandler = () => {
		setMenuOpen((p) => !p);
	};

	return (
		<header className={classes.header}>
			<div className={classes.header__content}>
				<h1>Coomer Memes</h1>
				<nav
					className={`${classes.header__content__nav} ${
						menuOpen && size.width < 768 ? classes.isMenu : ""
					}`}
				>
					<ul>
						<li>
							<Link
								to="/"
								onClick={menuToggleHandler}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/library"
								onClick={menuToggleHandler}
							>
								Library
							</Link>
						</li>
						<li>
							<Link
								to="/ethos"
								onClick={menuToggleHandler}
							>
								Ethos
							</Link>
						</li>
						<li>
							<Link
								to="/donate"
								onClick={menuToggleHandler}
							>
								Donate
							</Link>
						</li>
					</ul>
				</nav>
				<div className={classes.header__content__toggle}>
					{menuOpen ? (
						<Xmark
							onClick={menuToggleHandler}
							className={
								menuOpen && size.width < 768
									? classes.isMenu
									: ""
							}
						/>
					) : (
						<Menu
							onClick={menuToggleHandler}
							className={
								menuOpen && size.width < 768
									? classes.isMenu
									: ""
							}
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
