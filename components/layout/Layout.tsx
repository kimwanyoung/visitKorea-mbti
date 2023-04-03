import React, { PropsWithChildren } from "react"
import styled from "@emotion/styled"

const Layout = ({ children }: PropsWithChildren) => {
  return <LayoutWrapper>{children}</LayoutWrapper>
}

export default Layout

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`
