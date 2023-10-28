import dynamic from "next/dynamic";

const Products: any = dynamic(() => import("@/components/Products/Products"));
import Layout from "@/components/Layout";

Products.getLayout = function getLayout(page: any) {
  return (
    <Layout webViewMobile={true} web="products">
      {page}
    </Layout>
  );
};

export default Products;
