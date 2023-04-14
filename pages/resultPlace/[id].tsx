/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import GetMbtiPlace, { ResultPlaceI, RESULT_PLACE } from "@/lib/get-mbti-place"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { addDocument, addTotal, getDocument } from "@/lib/firestore"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { resetType } from "@/redux/typeSlice"
import { AppState } from "@/redux/store"
import { useRouter } from "next/router"
import { LoaderAlt } from "@emotion-icons/boxicons-regular"
export const getStaticPaths = async () => {
  const paths = RESULT_PLACE.map((props) => {
    return {
      params: { id: props.id },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = GetMbtiPlace(String(params?.id))

  return {
    props: {
      place: res,
    },
  }
}

const ResultPlace = ({
  pageProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const mbti = useSelector((state: AppState) => state.types.type).join("")
  const [loading, setLoading] = useState(false)

  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const currentDate = month + "-" + date
  const res = pageProps.place

  const handleClick = async () => {
    setLoading(true)
    const prevData = await getDocument(currentDate, mbti)
    if (prevData) {
      await addDocument(currentDate, mbti, prevData + 1)
      await addTotal(currentDate)
      setLoading(false)
    } else {
      await addDocument(currentDate, mbti, 1)
    }
    router.push("/")
    dispatch(resetType())
  }

  return (
    <>
      {loading && (
        <ModalWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <LoaderAlt width={70} color="white" />
            <p style={{ color: "white" }}>결과 집계 중입니다.</p>
          </div>
        </ModalWrapper>
      )}
      <PlaceWrapper>
        <Image src={res.image} alt="결과 페이지" fill priority quality={100} />
        <ButtonWrapper onClick={handleClick}>
          <Image
            src="/images/logo/completeBtn.svg"
            alt="완료 버튼"
            width={400}
            height={300}
            priority
          />
        </ButtonWrapper>
      </PlaceWrapper>
    </>
  )
}

export default ResultPlace

const PlaceWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 560vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`

const ButtonWrapper = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  /* height: 5rem; */
  background-color: transparent;
  border: none;
  z-index: 23;
`

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 300;

  svg {
    animation: rotate 2s linear;
  }
  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
