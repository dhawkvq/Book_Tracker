import { FC, useState } from 'react'
import { Book } from '../types/Book'
import { MoveButton } from './MoveButton/MoveButton'

export const ReadingBook: FC<{ book: Book }> = ({ book, ...rest }) => {
    const [hoveredOver, setHoveredOver] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleMoustEnterAndLeave = (type: 'enter'| 'leave') => {
        if(type === 'enter'){
            setHoveredOver(true);
            setShowButton(true);
        } else {
            setHoveredOver(false);
        }
    }
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
                    position: 'relative',
                    height: 160, 
                    width: 120, 
                    border: '1px solid gray', 
                    borderRadius: 20,
                    padding: 1,
                    margin: '0 5px'
                }}
                onMouseEnter={() => handleMoustEnterAndLeave('enter')}
                onMouseLeave={() => handleMoustEnterAndLeave('leave')}
            >
                <img src={book.imageLinks.thumbnail} 
                    alt="book cover" 
                    style={{ width: '100%', height: '100%', borderRadius: 20}} 
                />
                {/* Move Button */}
                {showButton && 
                    <MoveButton 
                        onAnimationEnd={(animationName) => 
                            animationName === 'fadeOut' && setShowButton(false)
                        }
                        className={ hoveredOver ? 'fadeIn': 'fadeOut'}
                        styles={{ position: 'absolute', bottom: -15, right: -15 }} 
                    />
                }
            </div>
            {/* Title */}
            <h3>{book.title}</h3>
            {/* Authors */}
            <h4>{book.authors}</h4>
        </div>
    )
}
