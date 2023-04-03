/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import styled from "@emotion/styled"
import Image from "next/image"
import React, { useEffect } from "react"
import GetMbtiPlace, { ResultPlaceI, RESULT_PLACE } from "@/lib/get-mbti-place"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { addDocument, addTotal, getDocument } from "@/lib/firestore"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { resetType } from "@/redux/typeSlice"
import { AppState } from "@/redux/store"
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
  const mbti = useSelector((state: AppState) => state.types.type).join("")
  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const currentDate = month + "-" + date
  const res = pageProps.place

  const handleClick = async () => {
    const prevData = await getDocument(currentDate, mbti)
    if (prevData) {
      await addDocument(currentDate, mbti, prevData + 1)
      await addTotal(currentDate)
      dispatch(resetType())
    } else {
      await addDocument(currentDate, mbti, 1)
    }
  }

  return (
    <>
      <PlaceWrapper>
        <Image src={res.image} alt="결과 페이지" fill priority quality={100} />
        <ButtonWrapper href="/" onClick={() => handleClick()}>
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

const ButtonWrapper = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  z-index: 23;
`
