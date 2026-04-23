import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
    <header className="site-header">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h1 className="site-brand mb-0">Ilaria Motta</h1>
            <p className="site-subtitle mb-0">Portfolio Projects</p>
          </div>

          <nav>
            <ul className="nav-list mb-0">
              <li><a href="#hero">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="header-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0,64 C180,120 340,20 540,58 C760,100 930,18 1110,40 C1260,58 1360,42 1440,18 L1440,120 L0,120 Z"
            fill="#EEF4F7"
          />
        </svg>
      </div>
    </header>


        </>
    )
}