import Head from "next/head";
export default function MetaSeo(props: any) {
  const urlSeo = "https://lemondev.id.vn";
  let { url, type, title, description, image, domain, card, keywords } = props;
  if (!url) {
    url = urlSeo;
  }
  if (!type) {
    type = "website";
  }
  if (!title) {
    title = "LemonDev - Thiết kế, lập trình website, hệ thống CMS.";
  }
  if (!description) {
    description =
      "Lập trình web, hệ thống CMS, website bán hàng, quảng cáo, UX/UI";
  }
  if (!image) {
    image = `${urlSeo}/assets/img/home/seo.png`;
  }
  if (!domain) {
    domain = "https://lemondev.id.vn";
  }
  if (!card) {
    card = "summary_large_image";
  }
  if (!keywords) {
    keywords =
      "IT - Information, ReactJS, NextJS, Express, Management, Development, Freelancer";
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="news_keywords" content={keywords} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="keywords" content={keywords} />
        <meta name="twitter:card" content={card} />
        <meta property="twitter:domain" content={domain} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
    </>
  );
}
