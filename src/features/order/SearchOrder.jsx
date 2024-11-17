import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  function handleSumit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSumit}>
      <input
        placeholder="Search order"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-40 sm:w-60 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 bg-yellow-100 rounded-full px-3 py-2 text-sm placeholder:text-stone-400 transition-all duration-150"
      />
    </form>
  );
}
