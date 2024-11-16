import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handleSumit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/q${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSumit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
}
