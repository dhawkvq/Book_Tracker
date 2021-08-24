import { FC } from 'react'
import { KeyOfShelf } from '../../types/Shelf'
import { formatLabel } from '../../utils/formatLabel';
import './tooltip.css';

export const MultiSelectTooltip: FC<{
    options?: Array<KeyOfShelf>;
    onOptionClick?: (option: KeyOfShelf) => void;
}> = ({ 
    options = [],
    onOptionClick = () => {},
    ...rest 
}) => {
    return (
        <ul className='multi-tooltip'{...rest}>
            {options.map((option, idx) => {
                return (
                    <li key={idx} onClick={() => onOptionClick(option)}>
                        {formatLabel(option)}
                    </li>
                )
            })}
        </ul>
    )
}
