/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { ArrowRight } from "emotion-icons/bootstrap"
import GetMbtiTypes, { ResultI } from "@/lib/get-mbti"
import { GetStaticProps, InferGetStaticPropsType } from "next"

export const getStaticPaths = async () => {
  const paths = GetMbtiTypes()
  const pathsArr = paths.map((prop) => {
    return { params: { id: prop } }
  })
  return {
    paths: pathsArr,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = GetMbtiTypes(String(params?.id)) as ResultI[]
  return {
    props: {
      result: data,
    },
  }
}

const Result = ({
  pageProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const result = pageProps.result[0]

  if (!result) {
    return <ResultWrapper></ResultWrapper>
  }

  return (
    <ResultWrapper>
      <Image src={result.image} alt="결과 배경 이미지" fill priority />
      <TextWrapper>
        <h1>{result.id}</h1>
        <h2>{result.shortDesc}</h2>
        <pre>{result.desc}</pre>
      </TextWrapper>
      <ResultBtn>
        <Link href={`/result/${result.id}`}>
          결과보기
          <ArrowRight width={50} color="white" />
        </Link>
      </ResultBtn>
    </ResultWrapper>
  )
}

export default Result

const ResultWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: white;
`

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 1;

  & h1 {
    font-size: 5rem;
    font-weight: bold;
  }

  & h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  & pre {
    margin-top: 5rem;
    font-size: 1.5rem;
    text-align: center;
  }
`

const ResultBtn = styled.div`
  position: absolute;
  bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 1;
  a {
    font-size: 2rem;
    color: white;
    text-decoration: none;
  }

  svg {
    margin-bottom: 4px;
    margin-left: 1rem;
  }
`
