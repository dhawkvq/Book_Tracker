import { ValueOf } from "../types/ValueOf";
import { Book } from "../types/Book"
import { Shelf } from "../types/Shelf"
const { REACT_APP_UDACITY_API } = process.env;

const api = REACT_APP_UDACITY_API;

// Generate a unique token for storing your bookshelf data on the backend server.
let token: string = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  Accept: 'application/json',
  Authorization: token
}  

export const get = async (bookId: Book['id']): Promise<Book> => {
    try{
        const response = await fetch(
            `${api}/books/${bookId}`, 
            { headers }
        )
        if(response.ok){
            return (await response.json()).data.book as Book;
        }
        throw new Error(response.statusText)
    }
    catch(error){
        throw error
    }
}

export const getAll = async (): Promise<Book[]> => {
  try {
      const response = await fetch(
        `${api}/books`, 
        { headers }
      )
      if(response.ok){
        return (await response.json()).books as Book[];
      }
      throw new Error(response.statusText)
  }
  catch(error){
    throw error;
  }
}

export const update = async (
    bookId: Book['id'], 
    shelf: ValueOf<Shelf>
  ): Promise<any> => {
    try {
        const response = await fetch(`${api}/books/${bookId}`, {
          method: 'PUT',
          headers: {
            ...headers,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ shelf })
        })
        if(response.ok){
            return response.json()
        }
        throw new Error(response.statusText)
    }
    catch(error){
        throw error
    }
}
  
export const search = async (query: string): Promise<Book[]> => {
    try {
        const response = await fetch(`${api}/search`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        })
        if(response.ok){
            return (await response.json()).books as Book[]
        }
        throw new Error(response.statusText)
    } 
    catch (error) { 
        throw error
    }   
}