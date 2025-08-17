import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import "./Navbar.css";
import { assets } from '../../assets/assets,';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        // Prevent body scroll when menu is open
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'auto';
        };
    }, []);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <Link to="/" onClick={closeMobileMenu}>
                            <img src={assets.logo} alt="Logo" className="navbar-logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-menu-desktop">
                        <div className="navbar-search">
                            <Search size={20} />
                        </div>
                        
                        <div className="navbar-item dropdown" onClick={toggleDropdown}>
                            <span>SERVICES</span>
                            <ChevronDown size={16} className={`dropdown-icon ${dropdownOpen ? 'rotated' : ''}`} />
                            
                            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                                <div className="dropdown-content">
                                    <Link to="/services/shipbuilding" className="dropdown-item">
                                        <span>Shipbuilding</span>
                                    </Link>
                                    <Link to="/services/yachtbuilding" className="dropdown-item">
                                        <span>Yachtbuilding</span>
                                    </Link>
                                    <Link to="/services/YachtandShipDesignService" className="dropdown-item">
                                        <span>Yacht and Ship Design Service</span>
                                    </Link>
                                    <Link to="/services/shipsalepurchase" className="dropdown-item">
                                        <span>Ship Sale & Purchase</span>
                                    </Link>
                                    <Link to="/services/yachtsalepurchase" className="dropdown-item">
                                        <span>Yacht Sale & Purchase</span>
                                    </Link>
                                    <Link to="/services/aircraftsalepurchase" className="dropdown-item">
                                        <span>Aircraft Sale & Purchase</span>
                                    </Link>
                                    <Link to="/services/aircraft2salepurchase" className="dropdown-item">
                                        <span>Aircraft 2 Sale Purchase</span>
                                    </Link>
                                    <Link to="/services/yachtfinance" className="dropdown-item">
                                        <span>Yacht Finance</span>
                                    </Link>
                                    <Link to="/services/aviationfinance" className="dropdown-item">
                                        <span>Aviation Finance</span>
                                    </Link>
                                    <Link to="/services/marshallislandsadvice" className="dropdown-item">
                                        <span>Marshall Islands Advice</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link to="/aboutus" className="navbar-item">
                            <span>ABOUT US</span>
                        </Link>
                        <Link to="/ourteam" className="navbar-item">
                            <span>OUR TEAM</span>
                        </Link>
                        <Link to="/news" className="navbar-item">
                            <span>NEWS</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-menu-content">
                        <div className="mobile-search">
                            <Search size={20} />
                            <span>Search</span>
                        </div>

                        <div className="mobile-dropdown">
                            <div className="mobile-dropdown-trigger" onClick={toggleDropdown}>
                                <span>SERVICES</span>
                                <ChevronDown size={16} className={`dropdown-icon ${dropdownOpen ? 'rotated' : ''}`} />
                            </div>
                            <div className={`mobile-dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                                <Link to="/services/shipbuilding" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Shipbuilding
                                </Link>
                                <Link to="/services/yachtbuilding" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Yachtbuilding
                                </Link>
                                <Link to="/services/YachtandShipDesignService" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Yacht and Ship Design Service
                                </Link>
                                <Link to="/services/shipsalepurchase" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Ship Sale & Purchase
                                </Link>
                                <Link to="/services/yachtsalepurchase" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Yacht Sale & Purchase
                                </Link>
                                <Link to="/services/aircraftsalepurchase" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Aircraft Sale & Purchase
                                </Link>
                                <Link to="/services/aircraft2salepurchase" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Aircraft 2 Sale Purchase
                                </Link>
                                <Link to="/services/yachtfinance" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Yacht Finance
                                </Link>
                                <Link to="/services/aviationfinance" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Aviation Finance
                                </Link>
                                <Link to="/services/marshallislandsadvice" className="mobile-dropdown-item" onClick={closeMobileMenu}>
                                    Marshall Islands Advice
                                </Link>
                            </div>
                        </div>

                        <Link to="/aboutus" className="mobile-menu-item" onClick={closeMobileMenu}>
                            ABOUT US
                        </Link>
                        <Link to="/ourteam" className="mobile-menu-item" onClick={closeMobileMenu}>
                            OUR TEAM
                        </Link>
                        <Link to="/news" className="mobile-menu-item" onClick={closeMobileMenu}>
                            NEWS
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;