import { Deck } from './decks-api.ts'

const initialState = {
  decks: [] as Deck[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'APP/FETCH-DECKS': {
      return {
        ...state,
        decks: action.decks,
      }
    }
    case 'APP/ADD-DECK': {
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    }
    default:
      return state
  }
}

export const setDecksAC = (decks: Deck[]) => ({
  type: 'APP/FETCH-DECKS' as const,
  decks,
})

export const addDeckAC = (deck: Deck) => ({
  type: 'APP/ADD-DECK' as const,
  deck,
})

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>
