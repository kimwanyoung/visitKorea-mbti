import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          type="module"
          src="https://bks0c7yrb0.execute-api.ap-northeast-2.amazonaws.com/v1/api/fontstream/djs/?sid=gAAAAABkIjNdQGnPV_r0ulUzkTUzX8RP1bPZu-feFoM_iGv5rpXI3URzIfmHk7jQy2zMGoB2PcE_hVygH3SE-nCn37e9Q8OPLGdqsbBoTZ1bKpadgtMvslJys4RliK9HxhQikDpqka-yljoTe0Xl0unkvAK7w6_y-DdIBynDTm0ZW5G3NLqJlDy6ctBC13adRjb4iriRJ6YWkfBo463PxHfgXKrDOpZL5KQA5z5jTV7jzOKr47yGc_B-h0oloXQcaZEy8L4ivfCA"
          charSet="utf-8"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
