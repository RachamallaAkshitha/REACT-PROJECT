import {
  sortMenu,
  brandsMenu,
  categoryMenu
} from "./filterBarData";
import "./FilterBar.css";

const FilterBar = ({
  sortBy,
  setSortBy,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  clearFilters
}) => {

  const toggleValue = (value, setter) => {
    setter(prev =>
      prev.includes(value)
        ? prev.filter(v => v !== value)
        : [...prev, value]
    );
  };

  return (
    <aside className="filter-sidebar">

      <button className="clear-btn" onClick={clearFilters}>
        Clear Filters
      </button>

      <div className="filter-section">
        <h4>Sort By</h4>
        {sortMenu.map(item => (
          <label key={item.id}>
            <input
              type="radio"
              name="sort"
              checked={sortBy === item.title}
              onChange={() => setSortBy(item.title)}
            />
            {item.title}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Brands</h4>
        {brandsMenu.map(item => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(item.label)}
              onChange={() =>
                toggleValue(item.label, setSelectedBrands)
              }
            />
            {item.label}
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h4>Category</h4>
        {categoryMenu.map(item => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(item.label)}
              onChange={() =>
                toggleValue(item.label, setSelectedCategories)
              }
            />
            {item.label}
          </label>
        ))}
      </div>

    </aside>
  );
};

export default FilterBar;
