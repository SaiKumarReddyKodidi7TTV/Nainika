import './Header.css'
import logo from "../assets/logo.png"
import header from "../assets/header-pic.jpg"

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        {/* Put /public/logo.png here */}
        <img src={logo} alt="Company Logo" className="header-img" />
      </div>

      <div className="header-center">
        <h1 className="company-name">Geetha Decorticators</h1>
        <p className="company-quote">"We serve with quality"</p>
      </div>

      <div className="header-right">
        {/* Put /public/header-pic.jpg here */}
        <img src={header} alt="Company" className="header-img" />
      </div>
    </header>
  )
}
