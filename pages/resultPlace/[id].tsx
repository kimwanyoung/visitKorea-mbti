import styled from "@emotion/styled"
import Image from "next/image"
import React, { FormEvent, useEffect } from "react"
import GetMbtiPlace, { ResultPlaceI, RESULT_PLACE } from "@/lib/get-mbti-place"
import { GetStaticProps } from "next"
import { useSelector } from "react-redux"
import { AppState } from "@/redux/store"
import { db } from "../../firebase/firebase"
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore"
import { addDocument, getDocument } from "@/lib/firestore"
import Link from "next/link"

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

  const month = new Date().getMonth() + 1
  const date = new Date().getDate()
  const currentDate = month + "-" + date

  const handleClick = async () => {
    const prevData = await getDocument(currentDate, res.id)
    if (prevData) {
      await addDocument(currentDate, res.id, prevData + 1)
    } else {
      await addDocument(currentDate, res.id, 1)
    }
  }

  handleClick()

  return {
    props: {
      place: res,
    },
  }
}

const ResultPlace = ({ pageProps }: { pageProps: { place: ResultPlaceI } }) => {
  const { place } = pageProps
  const mbti = useSelector((state: AppState) => state.types.type).join("")

  return (
    <>
      <PlaceWrapper>
        <Image
          src={place.image}
          alt="결과 페이지"
          fill
          priority
          quality={100}
        />
      </PlaceWrapper>
      <Link href="/">link</Link>
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
