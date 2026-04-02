// Supporters.jsx
const LOGOS = [
  { name: 'Co-Develop', svg: <svg viewBox="0 0 120 50"><circle cx="30" cy="25" r="14" fill="none" stroke="#666" strokeWidth="4"/><circle cx="56" cy="25" r="14" fill="none" stroke="#666" strokeWidth="4"/><text x="43" y="46" fontFamily="sans-serif" fontSize="8" fill="#666" textAnchor="middle" letterSpacing="1">CO-DEVELOP</text></svg> },
  { name: 'Gates Foundation', svg: <svg viewBox="0 0 160 50"><text x="0" y="18" fontFamily="Georgia,serif" fontSize="11" fill="#555" fontWeight="700">BILL&amp;MELINDA</text><text x="0" y="32" fontFamily="Georgia,serif" fontSize="13" fill="#555" fontWeight="700">GATES</text><text x="60" y="32" fontFamily="Georgia,serif" fontSize="9" fill="#555" fontStyle="italic">foundation</text></svg> },
  { name: 'Tata Trusts', svg: <svg viewBox="0 0 140 50"><text x="70" y="30" fontFamily="Arial,sans-serif" fontSize="16" fill="#666" fontWeight="700" textAnchor="middle" letterSpacing="3">TATA TRUSTS</text></svg> },
  { name: 'The Global Fund', svg: <svg viewBox="0 0 150 50"><text x="78" y="20" fontFamily="Arial,sans-serif" fontSize="11" fill="#666" fontWeight="700">THE</text><text x="78" y="33" fontFamily="Arial,sans-serif" fontSize="11" fill="#666" fontWeight="700">GLOBAL</text><text x="78" y="46" fontFamily="Arial,sans-serif" fontSize="11" fill="#666" fontWeight="700">FUND</text></svg> },
  { name: 'Nandan Nilekani', svg: <svg viewBox="0 0 170 50"><text x="58" y="22" fontFamily="Arial,sans-serif" fontSize="12" fill="#666" fontWeight="700" letterSpacing="1">NANDAN</text><text x="58" y="36" fontFamily="Arial,sans-serif" fontSize="12" fill="#666" fontWeight="700" letterSpacing="1">NILEKANI</text><text x="58" y="46" fontFamily="Arial,sans-serif" fontSize="7.5" fill="#999" letterSpacing="0.5">Philanthropies</text></svg> },
  { name: 'United Nations', svg: <svg viewBox="0 0 130 50"><rect x="5" y="10" width="35" height="30" rx="3" fill="none" stroke="#666" strokeWidth="3"/><text x="22" y="30" fontFamily="Arial,sans-serif" fontSize="13" fill="#666" fontWeight="700" textAnchor="middle">UN</text><text x="55" y="22" fontFamily="Arial,sans-serif" fontSize="10" fill="#666" fontWeight="600">UNITED</text><text x="55" y="34" fontFamily="Arial,sans-serif" fontSize="10" fill="#666" fontWeight="600">NATIONS</text></svg> },
  { name: 'World Bank', svg: <svg viewBox="0 0 140 50"><circle cx="22" cy="25" r="16" fill="none" stroke="#666" strokeWidth="3"/><line x1="22" y1="9" x2="22" y2="41" stroke="#666" strokeWidth="2"/><line x1="6" y1="25" x2="38" y2="25" stroke="#666" strokeWidth="2"/><text x="50" y="28" fontFamily="Arial,sans-serif" fontSize="11" fill="#666" fontWeight="700">WORLD BANK</text></svg> },
  { name: 'Omidyar Network', svg: <svg viewBox="0 0 130 50"><text x="65" y="20" fontFamily="Georgia,serif" fontSize="13" fill="#666" fontWeight="700" textAnchor="middle" letterSpacing="1">OMIDYAR</text><text x="65" y="36" fontFamily="Georgia,serif" fontSize="10" fill="#888" textAnchor="middle" letterSpacing="0.5">NETWORK</text></svg> },
];

export default function Supporters() {
  // Duplicate for seamless loop
  const allLogos = [...LOGOS, ...LOGOS];
  return (
    <section id="supporters">
      <div className="container px-4 px-lg-5">
      <div className="supporters-section">
        <h2 className="reveal">Our <strong>Supporters</strong></h2>
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {allLogos.map((logo, i) => (
              <div key={i} className="logo-item" title={logo.name}>
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
