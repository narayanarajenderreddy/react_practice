import { useSearchParams, Link } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get('q') || '';  // Get ?q=...
  const category = searchParams.get('category') || 'all';

  const products = [
    { id: 1, name: 'Laptop', category: 'electronics' },
    { id: 2, name: 'Phone', category: 'electronics' },
    { id: 3, name: 'Shirt', category: 'clothing' }
  ];

  const filtered = products.filter(p => 
    (category === 'all' || p.category === category) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Products</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setSearchParams({ q: e.target.value, category })}
        style={{ marginBottom: '10px', padding: '8px' }}
      />

      {/* Category Filter */}
      <select 
        value={category}
        onChange={(e) => setSearchParams({ q: query, category: e.target.value })}
        style={{ marginLeft: '10px', padding: '8px' }}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>

      {/* Results */}
      <h2>Results:</h2>
      <ul>
        {filtered.map(p => (
          <li key={p.id}>{p.name} ({p.category})</li>
        ))}
      </ul>

      {/* Direct Links */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/search?q=phone">Search "phone"</Link> | {' '}
        <Link to="/search?category=electronics">Electronics</Link>
      </div>
    </div>
  );
}

export default SearchPage;

// URL: /search?q=laptop&category=electronics
// query = "laptop"
// category = "electronics"