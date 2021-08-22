import { FC } from 'react';
import { Book } from '../types/Book';
import { Shelf } from '../types/Shelf';
import { ReadingBook } from './Book';

/**
 * 
 * @param {string} [label="CURRENTLY_READING"] - Defaults to CURRENTLY_READING 
 * @returns 
 */

export const LabeledShelf: FC<{ 
    label?: keyof typeof Shelf;
    books?: Book[];
    styles?: Record<string,string|number>;
}> = ({ 
    books,
    label = 'CURRENTLY_READING',
    styles = {}, 
    ...rest 
}) =>  (
    <div style={{ display: 'flex', flexDirection: 'column', ...styles }} {...rest}>
        <label style={{ fontSize: 18, fontWeight: 600 }}>{label}</label>
        <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}>
            {books 
                ? books.map((book) => <ReadingBook key={book.id} book={book} />)
                : <p>Nothing to see here!</p>
            }
        </div> 
    </div>
)

