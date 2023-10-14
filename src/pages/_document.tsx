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
