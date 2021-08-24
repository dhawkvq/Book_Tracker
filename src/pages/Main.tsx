import { FC } from 'react';
import { LabeledShelf } from '../components/LabeledShelf/LabeledShelf';
import { useBookContext } from '../context/BookContext';
import { KeyOfShelf, Shelf } from '../types/Shelf';

export const Main: FC = () => {
    const { books } = useBookContext();
    
    return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        { Object.keys(Shelf).map((key, idx) => {
            const shelfKey = key as KeyOfShelf
            return (
            <LabeledShelf
                key={idx}
                books={books.filter((book) => Shelf[shelfKey] === book.shelf)}
                styles={{ marginBottom: 20, border: '1px dashed orange' }}
                label={shelfKey} 
            />
        )
        })} 
    </div>
)}