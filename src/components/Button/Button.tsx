import React, { useState } from 'react';
import styles from "../Header/Header.module.css";

interface IProps {
    className?: string;
    color?: string;
    buttonText?: string;
    textColor?: string;
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({ className, color, buttonText, textColor, onClick }) => {
    const [isHovered, setIsHovered] = useState(false); // Состояние для отслеживания наведения на кнопку

    const buttonStyle = {
        backgroundColor: color || '#458FF6' || '#FFFFFF',
        color: textColor || '#FFFFFF' || '#458FF6',
    };

    const hoverButtonStyle = {
        backgroundColor: textColor || '#FFFFFF' || '#458FF6',
        color: color || '#458FF6' || '#FFFFFF',
    };

    const handleMouseEnter = () => {
        setIsHovered(true); // Устанавливаем состояние наведения при наведении на кнопку
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Сбрасываем состояние наведения при уходе курсора с кнопки
    };

    // Выбираем стиль в зависимости от состояния наведения
    const currentStyle = isHovered ? hoverButtonStyle : buttonStyle;

    return (
        <button
            className={`${styles.blueButton} ${className}`}
            style={currentStyle}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {buttonText}
        </button>
    );
}

export default Button;
