/* eslint-disable react-hooks/exhaustive-deps */
import { QuestionI } from "@/interface/question"
import { useRouter } from "next/router"
import React, { useState } from "react"
import styled from "@emotion/styled"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { addType } from "@/redux/typeSlice"
import { AppState } from "@/redux/store"
import Modal from "@/components/modal/Modal"
import { Dot, DotFill } from "@emotion-icons/octicons"
import { GetStaticPaths, GetStaticProps } from "next"
import GetMbtiQuestion from "@/lib/get-mbti-form"
import { ArrowLeft } from "@emotion-icons/feather"

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "0" } },
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = GetMbtiQuestion(Number(params?.id))
  return {
    props: { result: data },
  }
}

const Form = ({ pageProps }: { pageProps: { result: QuestionI } }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { id } = router.query
  const currentType = useSelector(
    (state: AppState) => state.types.type[Number(id)]
  )
  const type = useSelector((state: AppState) => state.types.type)
  const { result } = pageProps
  const [isClicked, setIsClicked] = useState(false)

  if (type.length === 4) {
    router.push(`/typeResult/${type.join("")}`)
  }
  const loadingRoutes = (param: number) => {
    if (param === 3) return
    setIsClicked(true)
    setTimeout(() => {
      router.push(`/form/${Number(param) + 1}`)
      setIsClicked(false)
    }, 1500)
  }

  if (!result || !id) {
    return <div></div>
  }

  const backRoutes = (param: number) => {
    if (param === 0) {
      router.push("/")
    } else {
      router.push(`/form/${param - 1}`)
    }
  }

  return (
    <QuestionWrapper>
      <ButtonWrapper
        onClick={() => {
          backRoutes(Number(id))
        }}
      >
        <ArrowLeft width={50} height={50} color="white" />
      </ButtonWrapper>
      <Image src={result.background} alt="배경화면" fill priority />
      <ContentWrapper>
        <Title>{result.title}</Title>
        <AnswerWrapper>
          <Contents>
            <CheckImage
              onClick={() => {
                dispatch(
                  addType({
                    value: result.types[0].type,
                    index: result.id,
                  })
                )
                loadingRoutes(Number(id))
              }}
            >
              <Image
                src={
                  currentType?.includes(result.types[0].type)
                    ? `${result.types[0].iconImage}_fill.svg`
                    : `${result.types[0].iconImage}.svg`
                }
                width={50}
                height={50}
                alt="체크 아이콘"
                quality={30}
              />
            </CheckImage>
            <ImageWrapper
              onClick={() => {
                dispatch(
                  addType({
                    value: result.types[0].type,
                    index: result.id,
                  })
                )
                loadingRoutes(Number(id))
              }}
            >
              <Image
                src={result.types[0].image}
                width={200}
                height={300}
                alt="left content image"
                quality={30}
              />
            </ImageWrapper>
            <pre>{result.types[0].question}</pre>
          </Contents>
          <Contents>
            <CheckImage
              onClick={() => {
                dispatch(
                  addType({
                    value: result.types[1].type,
                    index: result.id,
                  })
                )
                loadingRoutes(Number(id))
              }}
            >
              <Image
                src={
                  currentType?.includes(result.types[1].type)
                    ? `${result.types[1].iconImage}_fill.svg`
                    : `${result.types[1].iconImage}.svg`
                }
                width={50}
                height={50}
                alt="체크 아이콘"
                quality={30}
              />
            </CheckImage>
            <ImageWrapper
              onClick={() => {
                dispatch(
                  addType({
                    value: result.types[1].type,
                    index: result.id,
                  })
                )
                loadingRoutes(Number(id))
              }}
            >
              <Image
                src={result.types[1].image}
                width={200}
                height={300}
                alt="right content image"
                quality={30}
              />
            </ImageWrapper>
            <pre>{result.types[1].question}</pre>
          </Contents>
        </AnswerWrapper>
        <div style={{ marginTop: "2rem" }}>
          {Array.from({ length: 4 }).map((_, index) => {
            if (index === Number(id)) {
              return <DotFill key={`dot-${index}`} width={20} color="white" />
            } else {
              return <Dot key={`dot-${index}`} width={20} color="white" />
            }
          })}
        </div>
      </ContentWrapper>
      {isClicked && <Modal />}
    </QuestionWrapper>
  )
}

export default Form

const QuestionWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    position: absolute;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const Title = styled.h1`
  margin-bottom: 2rem;
  color: white;
  font-size: 2.5rem;
  font-weight: 800;
`

const AnswerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 5rem;
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 40%;
  & pre {
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    color: white;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
`

const CheckImage = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
`

const ButtonWrapper = styled.div`
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 46%;
  left: 3rem;
  z-index: 3;
`
