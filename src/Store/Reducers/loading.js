import { createReducer, createActions } from 'reduxsauce'

const initialState = false

export const startLoading = () => true

export const stopLoading = () => false

export const { Types, Creators } = createActions({
  startLoading: null,
  stopLoading: null
})

export const loading = {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading
}

export default createReducer(initialState, loading)