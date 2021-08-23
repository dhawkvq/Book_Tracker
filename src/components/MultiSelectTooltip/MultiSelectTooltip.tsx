import { FC } from 'react'
import { KeyOfShelf } from '../../types/Shelf'
import { Styles } from '../../types/Styles'
import { formatLabel } from '../../utils/formatLabel';
import './tooltip.css';

export const MultiSelectTooltip: FC<{
    styles?: Styles
    options?: Array<KeyOfShelf>;
    onOptionClick?: (option: KeyOfShelf) => void;
}> = ({ 
    styles = {}, 
    options = [],
    onOptionClick = () => {},
    ...rest 
}) => {
    return (
        <ul  
            className='multi-tooltip'
            style={{ 
                display: 'flex',
                border: '1px solid #C2C2C2',
                boxShadow: '2px 3px 12px rgba(0,0,0,.3)', 
                flexGrow: 1,
                minWidth: 150,
                flexDirection: 'column', 
                alignItems: 'center', 
                listStyle: 'none',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 0,
                cursor: 'pointer',
                ...styles 
            }} 
            {...rest}
        >
            {options.map((option, idx) => {
                return (
                    <li 
                        onClick={() => onOptionClick(option)}
                        key={idx}
                        style={{ 
                            padding: '5px 0' ,
                            textAlign: 'center',
                            width: '90%',
                            borderBottom: '1px solid gray',
                            fontSize: 12
                        }} >
                            {formatLabel(option)}
                    </li>
                )
            })}
        </ul>
    )
}
