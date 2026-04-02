// Topbar.jsx
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container-fluid px-4 px-lg-5">
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.5rem' }}>
          <a href="#" className="topbar-link">Events</a>
          <a href="#" className="topbar-link">Contact us</a>
          <div className="lang-sel" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <img src="https://flagcdn.com/w20/gb.png" alt="ENG" width="20" height="14" />
            <span>ENG</span>
            <i className="bi bi-chevron-down" style={{ fontSize: '0.65rem' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
