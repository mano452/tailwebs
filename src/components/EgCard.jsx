function isDark(hex) {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

export default function EgCard({ item }) {
  return (
    <div className="eg-card">
      <div className="eg-card-img-ph">
        <img src={item.image} alt={item.imgLabel} />
      </div>
      <div className="eg-card-body" style={{ background: item.bg }}>
        <div className="eg-card-title">{item.title}</div>
        <div className="eg-card-meta">
          <span className="meta-dot"></span>
          <span>{item.author}</span>
          <span className="meta-dot"></span>
          <span>{item.date}</span>
        </div>
        <div className="eg-tags">
          {item.tags.slice(0, 4).map((t) => (
            <span key={t} className="eg-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
