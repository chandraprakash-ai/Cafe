import React from 'react';

const TangerineIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3C12 3 14 6 15 7C16 8 18 8 18 8" />
            <path d="M12 3C12 3 10 5 10 7" />
        </svg>
    );
};

export default TangerineIcon;
