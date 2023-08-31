import NavBar from "./NavBar"
import "./Home.css"
function Home() {
    return (
        <div>
            <NavBar brandName="The 11's" title2="Contact" title3="About Us"/>
            <h1 className="text-center text-uppercase welcome-note">Welcome to The 11'z</h1>
        </div>
    )
}

export default Home