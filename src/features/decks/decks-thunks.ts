import { Dispatch } from 'redux'
import { AddDeckParams, decksAPI } from './decks-api.ts'
import { addDeckAC, setDecksAC } from './decks-reducer.ts'

export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.fetchDecks()
    dispatch(setDecksAC(res.data.items))
  } catch (e) {
    console.log(e)
  }
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
  try {
    const res = await decksAPI.addDeck(params)
    dispatch(addDeckAC(res.data))
  } catch (e) {
    console.log(e)
  }
}
