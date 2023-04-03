import { QuestionI } from "@/interface/question"

const questionList: QuestionI[] = [
  {
    id: 0,
    background: "/images/png/backgroundIE.png",
    title: "어떤 여행을 좋아하시나요?",
    types: [
      {
        type: "I",
        iconImage: "/images/checkIcon/mbti-I",
        image: "/images/svg/I.svg",
        question: "혼자 조용히 여행하고 \n한적한 곳을 둘러볼래요",
      },
      {
        type: "E",
        iconImage: "/images/checkIcon/mbti-E",
        image: "/images/svg/E.svg",
        question: "사람들과 북적북적 어울리며 \n신나는 여행을 즐길래요.",
      },
    ],
  },
  {
    id: 1,
    background: "/images/png/backgroundSN.png",
    title: "여행을 가기전 하는 걱정은 무엇인가요?",
    types: [
      {
        type: "S",
        iconImage: "/images/checkIcon/mbti-S",
        image: "/images/svg/S.svg",
        question: '"비가 오지 않고 맑아야 하는데,,," \n날씨에 대해 걱정해요.',
      },
      {
        type: "N",
        iconImage: "/images/checkIcon/mbti-N",
        image: "/images/svg/N.svg",
        question:
          '"여행중 휴대폰을 잃어버려 여행사진을 \n다 잃으면 어떡하지?" 걱정해요 ',
      },
    ],
  },
  {
    id: 2,
    background: "/images/png/backgroundTF.png",
    title: "여행을 정할 때 어떤 고민을 하시나요?",
    types: [
      {
        type: "T",
        iconImage: "/images/checkIcon/mbti-T",
        image: "/images/svg/T.svg",
        question: "여행 목적과 예산에 알맞은 \n여행인지 생각해요",
      },
      {
        type: "F",
        iconImage: "/images/checkIcon/mbti-F",
        image: "/images/svg/F.svg",
        question: "함께 여행가는 사람의 의견을 \n먼저 생각해요.",
      },
    ],
  },
  {
    id: 3,
    background: "/images/png/backgroundJP.png",
    title: "어떤 여행 계획을 세우시나요?",
    types: [
      {
        type: "J",
        iconImage: "/images/checkIcon/mbti-J",
        image: "/images/svg/J.svg",
        question:
          "여행지에 도착하는 시간부터 \n집으로 돌아오는 시간까지 전부 계획해요.",
      },
      {
        type: "P",
        iconImage: "/images/checkIcon/mbti-P",
        image: "/images/svg/P.svg",
        question: "여행지만 정해두고, \n상황에 따라 스케줄을 조정해요.",
      },
    ],
  },
]

export default function GetMbtiQuestion(id: number) {
  return questionList[id]
}
