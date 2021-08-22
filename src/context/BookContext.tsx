import { createContext, useContext, FC, useState, useEffect } from 'react';
import { Book } from '../types/Book';
import * as bookApi from '../api';


export interface BookContextValue {
    books: Book[];
    getBook: typeof bookApi.get;
    getAllBooks: typeof bookApi.getAll;
    updateBook: typeof bookApi.update;
    search: typeof bookApi.search;
}

export const BookContext = createContext<BookContextValue|null>(null);

export const BookProvider: FC = ({ children }) => {

    const [books, setBooks] = useState<Book[]>([]);

    // load all books on mount
    useEffect(() => {
        bookApi.getAll()
            .then((data) => setBooks(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <BookContext.Provider value={{
            books,
            getAllBooks: bookApi.getAll,
            getBook: bookApi.get,
            updateBook: bookApi.update,
            search: bookApi.search
        }}>
            { children }
        </BookContext.Provider>
    )
}

export function useBookContext(): BookContextValue {
    const bookContext = useContext(BookContext);
    if(!bookContext){
        throw new Error('useBookContext Hook must be called as a child of BookContext.Provider')
    }
    return bookContext
}   
    
