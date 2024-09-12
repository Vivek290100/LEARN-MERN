import React, { useState, useEffect, useCallback, useRef } from 'react';

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const fetchItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=50`);
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setItems(prevItems => [...prevItems, ...data]);
        setPage(prevPage => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        fetchItems();
      }
    }, options);

    if (loader.current) observer.observe(loader.current);

    return () => {
      if (loader.current) observer.disconnect();
    };
  }, [fetchItems, hasMore, loading]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Infinite Scroll List</h2>
      <div className="image-grid">
        {items.map((item, index) => (
          <div key={item.id} className="image-item">
            <img className="images" src={item.url} alt="" />
          </div>
        ))}
      </div>
      {hasMore && <div ref={loader} className="h-10" />}
      {loading && <div className="text-center py-4">Loading...</div>}
      {!hasMore && <div className="text-center py-4">No more items</div>}
    </div>
  );
};

export default InfiniteScrollList;


