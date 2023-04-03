/* eslint-disable react-hooks/exhaustive-deps */
import GetMbtiTypes from "@/lib/get-mbti"
import { AppState } from "@/redux/store"
import styled from "@emotion/styled"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import Marquee from "react-fast-marquee"
import { useSelector } from "react-redux"

const PLACE_LIST = [
  "충청남도 서천군",
  "·",
  "충청북도 제천시",
  "·",
  "전라남도 여수시",
  "·",
  "전라남도 보성군",
  "·",
  "대구광역시 달서구",
  "·",
  "부산광역시 북구",
  "·",
  "강원도 강릉시",
  "·",
  "전라북도 남원시",
  "·",
  "경상남도 밀양시",
  "·",
  "경기도 연천군",
  "·",
  "경상남도 고성군",
  "·",
  "경상남도 창원시",
  "·",
  "경상북도 문경시",
  "·",
  "경기도 고양시",
  "·",
  "경상북도 포항시",
  "·",
  "전라남도 장성군",
  "·",
]

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
  const data = GetMbtiTypes(String(params?.id))

  return {
    props: {
      result: data,
    },
  }
}

const MbtiResult = ({
  pageProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const mbti = useSelector((state: AppState) => state.types.type.join(""))
  const result = pageProps.result[0]

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/resultPlace/${mbti}`, undefined, { shallow: true })
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <MainWrapper>
      <Image src={result.resultImage} fill alt="main-background" priority />
      <TitleWrapper>
        <TextWrapper>
          <h1>{mbti} 당신에게 어울리는 생태녹색 관광지는···</h1>
        </TextWrapper>
      </TitleWrapper>
      <TextTicker>
        <Marquee gradient={false}>
          {PLACE_LIST.map((props, idx) => (
            <p key={props + "" + idx}>{props}</p>
          ))}
        </Marquee>
      </TextTicker>
    </MainWrapper>
  )
}

export default MbtiResult

const MainWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 200px;
`

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    font-weight: 900;
  }

  h2 {
    width: 63%;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`

const ButtonWrapper = styled(Link)`
  position: relative;
  background-color: transparent;
`

const TextTicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 3rem;
  margin-top: 3rem;
  border-top: 1px solid white;
  z-index: 1;
  overflow: hidden;
  p {
    font-size: 1rem;
    margin-left: 4rem;
  }
`
