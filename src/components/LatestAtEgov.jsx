import { useEffect, useState } from 'react';
import { CATEGORIES, fetchCards } from '../data/cardsApi';
import EgCard from './EgCard';
import CardSkeleton from './CardSkeleton';

export default function LatestAtEgov() {
  const [category, setCategory] = useState('whats-new');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchCards(category).then((res) => {
      setData(res);
      setVisible(res.slice(0, 3));
      setLoading(false);
      setShowAll(false);
    });
  }, [category]);

  const switchCategory = (key) => {
    setCategory(key);
  };

  const toggleShowAll = () => {
    if (showAll) {
      setVisible(data.slice(0, 3));
    } else {
      setVisible(data);
    }
    setShowAll(!showAll);
  };

  const hasMore = data.length > 3;

  return (
    <section>
      <div className="container px-4 px-md-5">
        <div className="cards-section section-gap-cards">
          <h2 className="reveal">
            Latest at <strong>eGov</strong>
          </h2>
          <div className="tabs-row reveal" style={{ transitionDelay: '0.1s' }}>
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`tab-btn-c${category === c.key ? ' active' : ''}`}
                onClick={() => switchCategory(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="cards-grid">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))
            ) : visible.length > 0 ? (
              visible.map((item) => (
                <EgCard key={item.id} item={item} />
              ))
            ) : (
              <div className="no-results" style={{ gridColumn: '1 / -1' }}>
                <h3>No results found</h3>
              </div>
            )}
          </div>
          {!loading && hasMore && (
            <div className="mt-4 ">
              <button className="see-all-btn" onClick={toggleShowAll}>
                {showAll ? 'Show less' : `See all (${data.length})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}