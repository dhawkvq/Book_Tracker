import { FC } from 'react'
import { Shelf } from '../types/Shelf'
import { Styles } from '../types/Styles'

export const MultiSelectTooltip: FC<{
    styles?: Styles
    options?: Shelf[];
    onOptionClick?: (option: keyof typeof Shelf) => void;
}> = ({ 
    styles = {}, 
    options = [],
    ...rest 
}) => {
    return (
        <ul  
            style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',   
                width: 100, 
                minHeight: 50, 
                listStyle: 'none',
                backgroundColor: 'white',
                borderRadius: 8,
                padding: 0,
                ...styles 
            }} 
            {...rest}
        >
            {options.map((option, idx) => 
                <li 
                    key={idx}
                    style={{ 
                        flex: 1,
                        width: '100%', 
                        padding: '5px 0', 
                        textAlign: 'center',
                        borderBottom: '1px solid gray', 
                        borderTop: '1px solid gray' 
                    }} >
                        {option}
                </li>
            )}
        </ul>
    )
}
