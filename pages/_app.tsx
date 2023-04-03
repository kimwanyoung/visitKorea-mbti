import Layout from "@/components/layout/Layout"
import "@/styles/reset.css"
import type { AppProps } from "next/app"
import { wrapper } from "@/redux/store"
import { Provider } from "react-redux"
import React from "react"

export default function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps)

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
