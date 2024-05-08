import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Egor</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://drive.google.com/uc?export=download&id=18KNYybHcyXb6s_XdduwJ6ti7DPAwMpR0" className="btn" download>
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;