import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
    <div className="main_block">
        <div className="hero-section">
            <h3>URM Applications</h3>
            <p>Providing Academia a list of potential underrepresented minority (URM) candidates for PhD studies, postdoc, and faculty positions</p>
        </div>
    </div>
    <div className="div_columns_container">
        <div className="div_column">
            <p>Our Story</p>
            <p>We have helped over 100 students</p>
            <NavLink to='/about' ><button className="submit-button">Learn More {'>'}</button></NavLink>
        </div>
        <div className="div_column">
            <p>Services</p>
            <p>We Offer a variety of services</p>
            <NavLink to='/services' ><button className="submit-button">Learn More {'>'}</button></NavLink>
        </div>
        <div className="div_column">
            <p>Academia Registration</p>
            <NavLink to='/register' ><button className="submit-button">Register {'>'}</button></NavLink>
        </div>
    </div>
    </>
  )
}

export default HomePage;