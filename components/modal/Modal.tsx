import styled from "@emotion/styled"
import React, { useEffect } from "react"

const Modal = () => {
  useEffect(() => {
    document.body.setAttribute("style", "overflow: hidden")
    return () => document.body.setAttribute("style", "overflow: auto")
  }, [])

  return (
    <ModalWrapper>
      <h2>다음 질문으로 넘어갑니다...</h2>
    </ModalWrapper>
  )
}

export default Modal

const ModalWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);

  & h2 {
    font-size: 2.5rem;
    color: white;
  }
`
