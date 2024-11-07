function Logo() {
    console.log("Hi there!");
    return (
        <svg width="50" height="50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 25C0 11.1929 11.1929 0 25 0H175C188.807 0 200 11.1929 200 25V175C200 188.807 188.807 200 175 200H25C11.1929 200 0 188.807 0 175V25Z" fill="#FD243E" />
            <rect x="126" y="102" width="10" height="60" rx="5" transform="rotate(90 126 102)" fill="white" />
            <rect x="134" y="78" width="10" height="68" rx="5" transform="rotate(90 134 78)" fill="white" />
            <path d="M68 59H132C143.598 59 153 68.402 153 80V141H68C56.402 141 47 131.598 47 120V80C47 68.402 56.402 59 68 59Z" stroke="white" strokeWidth="8" />
        </svg>

    );
}

export default Logo;