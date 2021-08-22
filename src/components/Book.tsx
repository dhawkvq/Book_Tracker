import { FC } from 'react'
import { Book } from '../types/Book'

export const ReadingBook: FC<{ book: Book }> = ({ book, ...rest }) => {
    return (
        <div {...rest} 
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center', 
                maxWidth: 160 
            }}
        >
            {/* Book Cover */}
            <div 
                style={{  
                    height: 160, 
                    width: 120, 
                    border: '1px solid gray', 
                    borderRadius: 20,
                    padding: 1,
                    margin: '0 5px'
                }}
            >
                <img src={book.imageLinks.thumbnail} 
                    alt="book cover" 
                    style={{ width: '100%', height: '100%', borderRadius: 20}} 
                />
            </div>
            {/* Title */}
            <h3>{book.title}</h3>
            {/* Authors */}
            <h4>{book.authors}</h4>
        </div>
    )
}
