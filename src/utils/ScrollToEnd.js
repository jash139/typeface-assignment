const scrollToEnd = (elementId) => {
    var elementContainer = document.getElementById(elementId);
    elementContainer.scrollTop = elementContainer?.scrollHeight;
}

export default scrollToEnd;