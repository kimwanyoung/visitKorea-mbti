import styled from "@emotion/styled"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import { ArrowRightCircle } from "emotion-icons/bootstrap"
import Marquee from "react-fast-marquee"
import Link from "next/link"
import { PLACE_LIST } from "@/mocks/mockData"

export default function Home() {
  return (
    <>
      <Head>
        <title>생태녹색관광</title>
      </Head>
      <MainWrapper>
        <LogoWrapper>
          <Image
            src="/images/logo/logo2.png"
            fill
            alt="main-background"
            priority
          />
        </LogoWrapper>
        <LogoWrapper2>
          <Image
            src="/images/logo/logo1.png"
            fill
            alt="main-background"
            priority
          />
        </LogoWrapper2>
        <Image src="/images/png/main.png" fill alt="main-background" priority />
        <TitleWrapper>
          <TextWrapper>
            <h1>당신의 MBTI 맞춤 생태녹색관광지는?</h1>
            <h2>
              바쁜 도심 속 지쳤던 몸과 마음을 위로받는 생태 녹색 관광, 나에게 꼭
              맞는 여행지로 함께 떠나요.
            </h2>
          </TextWrapper>
          <ButtonWrapper href="/form/0">
            <ArrowRightCircle width={60} color="white" />
          </ButtonWrapper>
        </TitleWrapper>
        <TextTicker>
          <Marquee gradient={false}>
            {PLACE_LIST.map((props, idx) => (
              <p key={props + "" + idx}>{props}</p>
            ))}
          </Marquee>
        </TextTicker>
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 200px;
  color: white;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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

const LogoWrapper = styled.div`
  position: absolute;
  width: 6rem;
  height: 2rem;
  top: 2rem;
  left: 2rem;
  z-index: 2;
`

const LogoWrapper2 = styled.div`
  position: absolute;
  width: 6rem;
  height: 2rem;
  top: 2rem;
  left: 9rem;
  z-index: 2;
`
