import React from 'react';
import './CloseButton.css';

interface Props {
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const CloseButton: React.FC<Props> = ({ onClick }) => {
    return (
        <div className="closeHolder" onClick={onClick}>
            <div className="item"></div>
        </div>
    )
};

export default CloseButton;