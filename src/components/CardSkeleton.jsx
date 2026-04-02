export default function CardSkeleton() {
  return (
    <div className="eg-card skeleton-card">
      <div className="skeleton-img"></div>
      <div className="eg-card-body" style={{ background: '#f0f4f8' }}>
        <div className="skeleton-line long"></div>
        <div className="skeleton-line medium" style={{ marginTop: '8px' }}></div>
        <div style={{ display: 'flex', gap: '6px', marginTop: '12px' }}>
          <div className="skeleton-tag"></div>
          <div className="skeleton-tag"></div>
          <div className="skeleton-tag"></div>
        </div>
      </div>
    </div>
  );
}
