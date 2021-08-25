import { FC, useState } from 'react'
import { ReadingBook } from '../components/ReadingBook/ReadingBook';
import { useBookContext } from '../context/BookContext';
import { Book } from '../types/Book';


export const Search: FC = () => {
    const [query, setQuery] = useState('');
    const { search } = useBookContext();
    const [searchResults, setSearchResults] = useState<Book[]>([])

    const handleQuery = async () => {
        try{
            const results = await search(query);
            setSearchResults(results);
            setQuery('');
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <div style={{ height: '100%', minHeight: '100%', display: 'flex', flex: 1, flexDirection:'column', alignItems: 'center', paddingBottom: 20 }}>
            <h1 style={{ marginBottom: 20 }}>Search Page!</h1>
            <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                placeholder='Search for books!' 
                style={{ backgroundColor: 'lightgray', color: 'blue', padding: 10, borderRadius: 8, border: '1px solid gray', marginBottom: 20 }} 
            />

            {query && <button onClick={handleQuery}>Search Now!</button>}
            {!!searchResults.length && 
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flex: 1, maxWidth: '100vw', flexWrap: 'wrap' }}>
                    {searchResults.map((book) => (
                        <ReadingBook key={book.id} book={book} styles={{margin: '20px 10px 0 10px'}} />
                    ))}

                </div>
            }
        </div>
    )
}
