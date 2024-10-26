import axios, { AxiosResponse } from 'axios'
import { FormValues } from './AddNewDeckForm/AddNewDeckForm.tsx'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  fetchDecks() {
    return instance.get<FetchDecksResponse>(`decks`)
  },
  addDeck(params: AddDeckParams) {
    return instance.post<null, AxiosResponse<Deck>, AddDeckParams>(`decks`, params)
  },
}

type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}

export type Deck = {
  isFavorite: true
  author: Auth
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: Date
  updated: Date
  cardsCount: number
}

type Auth = {
  id: string
  name: string
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type AddDeckParams = {
  name: string
}
