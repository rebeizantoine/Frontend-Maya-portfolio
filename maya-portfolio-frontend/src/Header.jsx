import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src="./assets-homepage/logo.png" alt="logo" />
            <div className="nav">
                <div className="home">Home</div>
                <div className="about">About</div>
                <div className="skills">Skills</div>
                <div className="experience">Experience</div>
                <div className="projects">Projects</div>
                <div className="contact">Contact</div>
            </div>
        </div>
    );
};

export default Header;