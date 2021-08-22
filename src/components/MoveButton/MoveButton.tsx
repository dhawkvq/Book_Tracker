import { FC } from 'react'
import { ReactComponent as UpArrow } from '../../images/arrow-up.svg';
import './moveButton.css'

export const MoveButton: FC<{ 
    styles?: Record<string,string|number>
    onClick?: unknown;
}> = ({ styles = {}, onClick }) => {
    return (
        <button 
            onClick={() => onClick}
            className='moveButton'
            style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 30, 
                height: 30, 
                border: 'none',
                borderRadius: '50%', 
                backgroundColor: 'red', 
                color: 'white', 
                ...styles }}
            >
            <UpArrow style={{ height: 15, width: 15, strokeWidth: 3 }} />
        </button>
    )
}
