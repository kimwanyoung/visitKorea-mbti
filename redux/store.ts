import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import typeReducer from "@/redux/typeSlice"

const makeStore = () => {
  return configureStore({
    reducer: {
      types: typeReducer,
    },
    // devTools: true, // production 모드 때 해제
  })
}
export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>

export const wrapper = createWrapper<AppStore>(makeStore)
