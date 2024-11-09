import React from "react";

const Logo = () => {
    console.log("Hi there!");
    return (
        <svg width="45" height="45" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100C0 44.7715 44.7715 0 100 0V0C155.228 0 200 44.7715 200 100V100C200 155.228 155.228 200 100 200V200C44.7715 200 0 155.228 0 100V100Z" fill="#FD243E" />
            <rect x="126" y="102" width="10" height="60" rx="5" transform="rotate(90 126 102)" fill="white" />
            <rect x="134" y="78" width="10" height="68" rx="5" transform="rotate(90 134 78)" fill="white" />
            <path d="M68 59H132C143.598 59 153 68.402 153 80V141H68C56.402 141 47 131.598 47 120V80C47 68.402 56.402 59 68 59Z" stroke="white" strokeWidth="8" />
        </svg>

    );
}

export default Logo;