import { ReactElement } from "react"

export interface mbitI {
  type: string
  iconImage: string
  question: string
  image: string
}

export interface QuestionI {
  id: number
  background: string
  title: string
  types: mbitI[]
}
