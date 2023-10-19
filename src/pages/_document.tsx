// @ts-nocheck
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import Script from "next/script";
import Link from "next/link";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    // @ts-ignore
    return (
      <Html id="html-main">
        <Head>
          <link rel="shortcut icon" href="/assets/img/favicon/favicon.png" />
          <link rel="shortcut icon" href="/assets/img/favicon/favicon.ico" />
          <link rel="icon" href="/assets/img/favicon/favicon.png" />
          <link rel="icon" href="/assets/img/favicon/favicon.ico" sizes="any" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-TTV8L17GD2"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TTV8L17GD2');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
