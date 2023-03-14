import { Page, Layout } from "@shopify/polaris";
import ProductsCard from "../components/products/ProductsCard";
import "./index.css";

export default function HomePage() {
  return (
    <div className="page">
      <Page narrowWidth>
        <Layout>
          <Layout.Section>
            <ProductsCard />
          </Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}
