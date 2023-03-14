import { Card, Checkbox, Layout, TextContainer } from "@shopify/polaris";

function ProductItem(product) {
  return (
    <Card title="Product" description={product.name}>
      <Layout>
        <Layout.Section oneHalf>
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={product.image}
          />
        </Layout.Section>
        <Layout.Section oneHalf>
          <TextContainer spacing="loose">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {product.discountedPrice ? (
              <div>
                <div>
                  <span style={{ textDecoration: "line-through" }}>
                    {product.price}
                  </span>{" "}
                  {product.discountedPrice}
                </div>
                <div>{product.discountPercentage}% off</div>
              </div>
            ) : (
              ""
            )}
            <Checkbox
              label="Select this product"
              checked={product.selectedProduct}
              onChange={product.handleSelectProduct}
            />
          </TextContainer>
        </Layout.Section>
      </Layout>
    </Card>
  );
}

export default ProductItem;
