import { useState } from 'react';
import { useNavScroll } from '../hooks/useScrollReveal';
const NAV_ITEMS = [
  { label: 'About Us', items: ['Our Story', 'Team', 'Careers'] },
  { label: 'Areas of Work', items: ['Urban Governance', 'Rural Development', 'Health'] },
  { label: 'Products & Solutions',items: ['DIGIT Platform', 'Health Stack'] },
  { label: 'Our Platform', items: ['Architecture', 'Open Source'] },
  { label: 'Ecosystem', items: ['Partners', 'Community'] },
  { label: 'Resources', items: ['Blog', 'Reports', 'Case Studies'] },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  useNavScroll('mainNavbar');

  return (
    <nav className="egov-navbar sticky-top" id="mainNavbar">
      <div className="container px-4 px-lg-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a className="navbar-brand" href="#top" style={{ textDecoration: 'none' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span className="logo-e">e</span><span className="logo-gov">GOV</span>
            </div>
            <div className="logo-sub">FOUNDATION</div>
          </div>
        </a>
        <button
          className="navbar-toggler-custom"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.5rem', color: 'var(--navy)' }}></i>
        </button>
        <div className={`navbar-collapse-custom ${open ? 'open' : ''}`}>
          <ul className="navbar-nav-custom">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="nav-item-custom dropdown-custom">
                <button
                  className="nav-link-custom dropdown-toggle"
                  onClick={() => setOpenDrop(openDrop === item.label ? null : item.label)}
                >
                  {item.label} <i className="bi bi-chevron-down" style={{ fontSize: '0.6rem', marginLeft: '2px' }}></i>
                </button>
                {openDrop === item.label && (
                  <ul className="egov-dropdown-custom">
                    {item.items.map((sub) => (
                      <li key={sub}>
                        <a href="#" className="dropdown-item-custom" onClick={() => setOpenDrop(null)}>{sub}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="nav-item-custom">
              <button className="nav-link-custom" style={{ fontSize: '1.05rem' }}>
                <i className="bi bi-search"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
