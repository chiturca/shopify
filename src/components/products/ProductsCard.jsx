import {
  Button,
  Card,
  Heading,
  TextContainer,
  TextField,
} from "@shopify/polaris";
import products from "./products.json";
import ProductItem from "./ProductItem";
import ProductFilters from "./ProductFilters";
import { useState } from "react";
import "./Products.css";

export default function ProductsCard() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searched, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = products
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    .filter((item) => item.name.toLowerCase().includes(searched.toLowerCase()));

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [discount, setDiscount] = useState(0);

  const handleSelectProduct = (isChecked, product) => {
    setSelectedProducts((prevSelectedProducts) =>
      isChecked
        ? [...prevSelectedProducts, product]
        : prevSelectedProducts.filter((p) => p !== product)
    );
  };

  const handleApplyDiscount = () => {
    const discountedProducts = selectedProducts.map((product) => ({
      ...product,
      discountedPrice: product.price * (1 - discount / 100),
      discountPercentage: discount,
    }));
    setSelectedProducts((prevProducts) =>
      prevProducts.map(
        (product) =>
          discountedProducts.find((p) => p.id === product.id) || product
      )
    );
  };

  return (
    <>
      <Card title="Products" sectioned>
        <TextContainer spacing="loose">
          <Heading element="h4">
            <ProductFilters
              onSearchChange={setSearch}
              onCategoryChange={handleCategoryChange}
              search={searched}
            />
            <TextField
              label="Discount %"
              type="number"
              value={discount}
              onChange={setDiscount}
            />
            <Button onClick={handleApplyDiscount}>Apply Discount</Button>
          </Heading>
          {itemsToDisplay.map((product) => {
            return (
              <ProductItem
                id={product.id}
                key={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                category={product.category}
                price={product.price}
                handleSelectProduct={(isChecked) =>
                  handleSelectProduct(isChecked, product)
                }
                selectedProduct={selectedProducts.includes(product)}
              />
            );
          })}
        </TextContainer>
      </Card>
    </>
  );
}
