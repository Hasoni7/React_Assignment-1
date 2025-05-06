function SearchBar({ searchTerm, onChange }) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
