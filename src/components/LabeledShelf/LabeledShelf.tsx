import { FC } from 'react';
import { Book } from '../../types/Book';
import { KeyOfShelf } from '../../types/Shelf';
import { Styles } from '../../types/Styles';
import { formatLabel } from '../../utils/formatLabel';
import { ReadingBook } from '../ReadingBook/ReadingBook';
import './labeledShelf.css';

/**
 * @param {string} [label="CURRENTLY_READING"] - Defaults to CURRENTLY_READING 
 */

export const LabeledShelf: FC<{ 
    label?: KeyOfShelf;
    books?: Book[];
    styles?: Styles;
}> = ({ 
    books,
    label = 'CURRENTLY_READING',
    styles = {}, 
    ...rest 
}) =>  (
    <div className='labeledShelf'
        style={{ ...styles }} 
        {...rest}
    >
        <label>{formatLabel(label)}</label>
        <div className='bookRow'>
            {books 
                ? books.map((book) => <ReadingBook key={book.id} book={book} />)
                : <p>Nothing to see here!</p>
            }
        </div> 
    </div>
)

