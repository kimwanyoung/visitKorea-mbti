import { QuestionI } from "@/interface/question"
import { ResultI } from "@/lib/get-mbti"
import { ResultPlaceI } from "@/lib/get-mbti-place"
import Image from "next/image"
import React from "react"
const TYPES: ResultI[] = [
  {
    id: "ENTP",
    shortDesc: '"고생도 추억이라 주장하는 뛰어난 변론가"',
    desc: "지적인 도전과 논쟁을 두려워 하지 않는 똑똑하고 호기심도 많은 유형이에요. \nENTP는 말을 청산유수로 잘 한다는 특징을 가져요.\n여행을 갈 때는 목적지만 정해두고 상황에 따라 재빠르게 대처한답니다!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/entp.jpg",
  },
  {
    id: "ENTJ",
    shortDesc: '"여행지에서 역할분담해서 알려주는 대담한 통솔자"',
    desc: "대담하면서도 상상력이 풍부한 강한 의지의 소유자예요.\n다양한 방법을 모색하거나 여의치 않을 경우 새로운 방안을 창출하는\n리더형이 여기 속해요. ENTJ는 여행지에 가서 동행자들에게 각각 역할분담을 \n해주고, 역할을 수행할 수 있게 도와주며 여행을 이끌어가요.",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/entj.jpg",
  },
  {
    id: "ENFP",
    shortDesc: "조편성까지 미리 해두는 재기발랄한 활동가",
    desc: "창의적이며 항상 웃을 거리를 찾아다니는 활발한 성격이에요.\n사람들과 자유롭게 어울리기를 좋아하는 넘치는 열정의 소유자가 여기 속해요.\n여행을 준비할 때는, 누구랑 같이 할지에 대해 중점을 둬요.\nENFP는 함께 여행하는 사람들과 좋은 추억을 만들기 위한 여행을 준비해요.",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/enfp.jpg",
  },
  {
    id: "ENFJ",
    shortDesc: '"여행가방이 도라에몽 주머니··· 주변을 다 챙기는 사회운동가"',
    desc: "넘치는 카리스마와 영향력으로 청중을 압도하는 리더형이 여기에 속해요.\nEnfj는 여행을 준비할 때, 함께 가는 사람들의 물건까지 다 챙기고\n혹시 놓치는게 없는지 여러번 확인하고 신경쓰는 편이에요.",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/enfj.jpg",
  },
  {
    id: "ESTP",
    shortDesc: '"여행지에서 사업 아이템을 발견하는, 모험을 즐기는 사업가"',
    desc: "벼랑 끝의 아슬아슬한 삶을 진정으로 즐길 줄 아는 이들이에요.\n명석한 두뇌와 에너지, 그리고 뛰어난 직관력을 가지고 있는 있는 이들이 여기 속해요.\nESTP는 여행지에 가서도 독특한 사업 아이템을 발견하고 이를 사업화할 방안을 모색한답니다!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/estp.jpg",
  },
  {
    id: "ESTJ",
    shortDesc: '"여행 계획 꼼꼼히, 엄격한 관리자"',
    desc: "사물이나 사람을 관리하는데 타의 추종을 불허하는 뛰어난 실력을 갖춘 관리자형\n사람이에요. ESTJ는 여행을 준비하며 삼시 세끼와 어떤 디저트를 먹을 것까지 계획한답니다!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/estj.jpg",
  },
  {
    id: "ESFP",
    shortDesc: '"여행지 주변의 라운지바를 찾아두는, 자유로운 영혼의 연예인"',
    desc: "주위에 있으면 인생이 지루할 새가 없을 정도로 즉흥적이며 열정과 에너지가 넘치는\n연예인형 사람이에요. ESFP는 여행을 가기 전 숙소 근처 라운지바, 펍 등\n놀거리를 미리 찾아둔답니다!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/esfp.jpg",
  },
  {
    id: "ESFJ",
    shortDesc: '"동행자들과 어떻게 놀지 생각하는, 사교적인 외교관"',
    desc: "타인을 향한 세심한 관심과 사교적인 성향으로 사람들 내에서 인기가 많으며,\n 타인을 돕는데 열성적인 세심한 마음을 가졌어요. ESFJ는 여행지에 가면\n레크레이션 강사 모드로 변신하여 사람들과 어떻게 놀지를 가장 먼저 생각해요!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/esfj.jpg",
  },
  {
    id: "ISTP",
    shortDesc: '"평소에는 조용하지만 여행지에서는 대담하게 변하는, 탐험형"',
    desc: "대담하고 현실적인 성향으로 다양한 도구 사용에 능숙한 탐험형 사람이에요.\nISTP는 여행지에 가면 평소의 성격과는 다르게 이것 저것 탐험하고 시도해본답니다!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/istp.jpg",
  },
  {
    id: "ISTJ",
    shortDesc: '"여행 가기 전부터 엑셀로 분 단위 계획표를 짜는, 논리주의자"',
    desc: "사실에 근거하여 사고하고 결정하기에 주변으로부터 한 치의 의심을 사지 않는\n현실주의자형 사람이에요. ISTJ는 여행을 준비할 때, 엑셀로 시간 · 장소 · 상황별로\n계획하고 경우의 수를 계산해요!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/istj.jpg",
  },
  {
    id: "ISFP",
    shortDesc: '"일몰이 예쁜 숙소 등 디테일에 집중하는 호기심 많은 예술가"',
    desc: "항시 새로운 것을 찾아 시도하거나 도전할 준비가 되어 있는 융통성 있는\n성격의 매력 넘치는 예술가형 사람이에요. ISFP는 여행을 갈 때, 조식이 맛있는\n숙소나 일몰이 아름다운 숙소 등 작은 요소 요소에 집중하여 세심하게 계획해요.",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/isfp.jpg",
  },
  {
    id: "ISFJ",
    shortDesc: '"함께 여행가는 사람들의 의견을 모아 정리하는 섬세한 수호자"',
    desc: "소중한 이들을 수호하는데 심혈을 기울이는 헌신적이며 성실한 방어자형 사람이에요.\nISFJ는 여행할 때, 함께 여행하는 사람들의 의견에 귀기울이고\n모두가 즐길 수 있는 방향을 모색해요!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/isfj.jpg",
  },
  {
    id: "INTP",
    shortDesc: '"사람들이 많이 안 가는 곳을 여행지로 하는, 혁신적인 사색가"',
    desc: "끊임없이 새로운 지식에 목말라하는 혁신가형 사람이에요.\nINTP는 사람들이 많이 안 가본 새로운 여행지를 목적지로 선정하는 호기심 많은 혁신가예요.",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/intp.jpg",
  },
  {
    id: "INTJ",
    shortDesc: '"여행지의 역사와 기후까지 모두 파악해 가는, 용의주도한 전략가"',
    desc: "상상력이 풍부하며 철두철미한 계획을 세우는 전략가형 사람이에요.\nINTJ는 여행을 가기 전, 여행지에 대해 A부터 Z까지 모두 파악하여, 가이드 수준으로 공부를 완료한답니다!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/intj.jpg",
  },
  {
    id: "INFP",
    shortDesc:
      '"갈까 말까 고민하지만 결국에는 그 누구보다 재밌게 여행을 즐기는, 밝은 열정가"',
    desc: "상냥한 성격의 이타주의자로 건강하고 밝은 사회 건설에 앞장서는 낭만형 사람이에요.\nINFP는 여행을 계획할 때 가끔은 우유부단 하지만, 결국에는 인싸들과 함께 즐겁게\n여행을 다녀오곤 한답니다.",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/infp.jpg",
  },
  {
    id: "INFJ",
    shortDesc: '"숙소에서 밤에 어떤 음악을 틀지 고민하는 이상주의자"',
    desc: "조용하고 신비로우며 샘솟는 영감으로 지칠 줄 모르는 이상주의자형 사람이에요.\nINFJ는 낭만적인 여행을 만들기 위해, 숙소에서 밤에 어떤 영화를 보고 음악을 틀고 \n어떤 와인을 먹을지 고민한답니다!",
    image: "/images/png/backgroundJP.png",
    resultImage: "/images/png/result/infj.jpg",
  },
]

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

export const RESULT_PLACE: ResultPlaceI[] = [
  {
    id: "ESTP",
    image: "/images/place/estp.png",
  },
  {
    id: "ENFJ",
    image: "/images/place/enfj.png",
  },
  {
    id: "ENFP",
    image: "/images/place/enfp.png",
  },
  {
    id: "ENTJ",
    image: "/images/place/entj.png",
  },
  {
    id: "ENTP",
    image: "/images/place/entp.png",
  },
  {
    id: "ESFJ",
    image: "/images/place/esfj.png",
  },
  {
    id: "ESFP",
    image: "/images/place/esfp.png",
  },
  {
    id: "ESTJ",
    image: "/images/place/estj.png",
  },
  {
    id: "INFJ",
    image: "/images/place/infj.png",
  },
  {
    id: "INFP",
    image: "/images/place/infp.png",
  },
  {
    id: "INTJ",
    image: "/images/place/intj.png",
  },
  {
    id: "INTP",
    image: "/images/place/intp.png",
  },
  {
    id: "ISFJ",
    image: "/images/place/isfj.png",
  },
  {
    id: "ISFP",
    image: "/images/place/isfp.png",
  },
  {
    id: "ISTJ",
    image: "/images/place/istj.png",
  },
  {
    id: "ISTP",
    image: "/images/place/istp.png",
  },
]

const ImageLoader = () => {
  return (
    <div style={{ display: "none" }}>
      {TYPES.map((prop) => (
        <Image
          key={prop.id}
          src={prop.resultImage}
          width={1}
          height={1}
          alt="main-background"
          priority
        />
      ))}
      {questionList.map((prop) => (
        <Image
          key={prop.id}
          src={prop.background}
          width={1}
          height={1}
          alt="main-background"
          priority
        />
      ))}
      {questionList.map((prop) => (
        <Image
          key={prop.types[0].image}
          src={prop.types[0].image}
          width={1}
          height={1}
          alt="main-background"
          priority
        />
      ))}
      {questionList.map((prop) => (
        <Image
          key={prop.types[1].image}
          src={prop.types[1].image}
          width={1}
          height={1}
          alt="main-background"
          priority
        />
      ))}
      {RESULT_PLACE.map((prop) => (
        <Image
          key={prop.id}
          src={prop.image}
          width={1}
          height={1}
          alt="main-background"
          priority
        />
      ))}
    </div>
  )
}

export default ImageLoader
