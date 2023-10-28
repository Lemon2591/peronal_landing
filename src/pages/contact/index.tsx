import dynamic from "next/dynamic";

const Contact: any = dynamic(() => import("@/components/Contact/Contact"));
import Layout from "@/components/Layout";

Contact.getLayout = function getLayout(page: any) {
  return (
    <Layout webViewMobile={true} web="contact">
      {page}
    </Layout>
  );
};

export default Contact;
