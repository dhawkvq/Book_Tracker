import { FC, useState } from 'react'
import { ReactComponent as UpArrow } from '../../images/arrow-up.svg';
import { KeyOfShelf } from '../../types/Shelf';
import { Styles } from '../../types/Styles';
import { MultiSelectTooltip } from '../MultiSelectTooltip/MultiSelectTooltip';
import './moveButton.css'

export const MoveButton: FC<{ 
    styles?: Styles;
    className?: string;
    onAnimationEnd?: (animationName: string) => void;
    onClick?: unknown;
    shelfOptions?: Array<KeyOfShelf>;
    onOptionClick?: (value: KeyOfShelf) => void;
}> = ({ 
    styles = {}, 
    onClick = () => {}, 
    className = '', 
    onAnimationEnd = () => {},
    shelfOptions,
    onOptionClick = () => {},
    ...rest 
}) => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div style={{ position: 'relative' }} {...rest}>
            {/* Tooltip */}
            {showOptions &&
                <MultiSelectTooltip 
                    styles={{ position: 'absolute', zIndex: 1, bottom: 10, right: -50 }}
                    options={shelfOptions}
                    onOptionClick={onOptionClick}
                />
            }
            <button 
                onAnimationEnd={({ animationName }) => onAnimationEnd(animationName)}
                onClick={() => setShowOptions(!showOptions)}
                className={`moveButton ${ className }`}
                style={{ cursor: 'pointer', ...styles }}
                >
                <UpArrow style={{ height: 15, width: 15, strokeWidth: 3 }} />
            </button>
        </div>
    )
}
