import { FC } from 'react'
import { ReactComponent as UpArrow } from '../../images/arrow-up.svg';
import './moveButton.css'

export const MoveButton: FC<{ 
    styles?: Record<string,string|number>
    className?: string;
    onAnimationEnd?: (animationName: string) => void;
    onClick?: unknown;
}> = ({ 
    styles = {}, 
    onClick, 
    className = '', 
    onAnimationEnd = () => {} 
}) => {
    return (
        <button 
            onAnimationEnd={({ animationName }) => onAnimationEnd(animationName)}
            onClick={() => onClick}
            className={`moveButton ${ className }`}
            style={{ ...styles }}
            >
            <UpArrow style={{ height: 15, width: 15, strokeWidth: 3 }} />
        </button>
    )
}
