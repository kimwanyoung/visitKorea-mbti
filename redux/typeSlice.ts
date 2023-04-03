import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "@/redux/store"

interface Initial {
  type: string[]
}

const initialState: Initial = {
  type: [],
}

const typeSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    addType(state, action: PayloadAction<{ value: string; index: number }>) {
      const { value, index } = action.payload
      if (state.type[index]) {
        state.type[index] = value
        return
      } else {
        state.type.push(value)
        return
      }
    },
    resetType(state, action?: PayloadAction) {
      state.type = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.types,
      }
    })
  },
})

export const { addType, resetType } = typeSlice.actions
export default typeSlice.reducer
