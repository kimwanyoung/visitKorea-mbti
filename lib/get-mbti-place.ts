export interface ResultPlaceI {
  id: string
  image: string
}

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

const GetMbtiPlace = (type: string) => {
  const resultPlace = RESULT_PLACE.filter((prop) => prop.id === type)
  return resultPlace[0]
}

export default GetMbtiPlace
