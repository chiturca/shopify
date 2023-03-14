import { Layout } from "@shopify/polaris";

function ProductFilters({ onCategoryChange, onSearchChange, search }) {
  function handleSearchChange(e) {
    onSearchChange(e.target.value);
  }

  return (
    <Layout>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleSearchChange}
        value={search}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        <option value="Category C">Category C</option>
      </select>
    </Layout>
  );
}

export default ProductFilters;
