import { FC, useState } from 'react'
import { useBookContext } from '../../context/BookContext';
import { Book } from '../../types/Book'
import { KeyOfShelf, Shelf } from '../../types/Shelf';
import { Styles } from '../../types/Styles';
import { MoveButton } from '../MoveButton/MoveButton';
import noCover from '../../images/noCover.jpeg'
import './readingBook.css';

export const ReadingBook: FC<{ 
    book: Book; 
    styles?: Styles; 
}> = ({ 
    book, 
    styles = {}, 
    ...rest 
}) => {
    const [hoveredOver, setHoveredOver] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const { 
        updateBook, 
        getAllBooks, 
        setBooks } = useBookContext();

    const handleMoustEnterAndLeave = (type: 'enter'| 'leave') => {
        if(type === 'enter'){
            setHoveredOver(true);
            setShowButton(true);
        } else {
            setHoveredOver(false);
        }
    }

    const handleOptionClick = async (value: KeyOfShelf ) => {
        try {
            await updateBook(book.id,Shelf[value]);
            const updatedBooks = await getAllBooks();
            setBooks(updatedBooks)
        } catch (error) {
            console.error(error)
        }
    }

    const bookCoverSrc = book.imageLinks?.thumbnail ?? noCover;
    
    return (
        <div {...rest} className='bookContainer' style={{ ...styles }}>
            {/* Book Cover */}
            <div className='bookCover'
                onMouseEnter={() => handleMoustEnterAndLeave('enter')}
                onMouseLeave={() => handleMoustEnterAndLeave('leave')}
            >
                <img src={bookCoverSrc} alt="book cover" />
                {/* Move Button */}
                {showButton && 
                    <MoveButton 
                        onAnimationEnd={(animationName) => 
                            animationName === 'fadeOut' && setShowButton(false)
                        }
                        onOptionClick={handleOptionClick}
                        className={ hoveredOver ? 'fadeIn': 'fadeOut'}
                        shelfOptions={Object.keys(Shelf).filter((shelfKey) => {
                            const key = shelfKey as KeyOfShelf;
                            return Shelf[key] !== book.shelf 
                        }) as Array<KeyOfShelf>}
                    />
                }
            </div>
            {/* Title */}
            <h3 className='bookTitle'>{book.title}</h3>
            {/* Authors */}
            {book.authors && 
                <div className='authors'>
                    {book.authors.map((author,idx) => (
                        <h4 key={idx}>{author}</h4>
                    ))}
                </div>
            }
        </div>
    )
}
