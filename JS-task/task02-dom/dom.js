function changeOuterLinks() {
    const navElements = document.querySelectorAll("nav#link-list a");
    for (let i = 0; i < navElements.length; i++) {
        if (navElements[i].innerHTML.includes('outer')) {
            navElements[i].setAttribute('target', '_blank');
        }
    }
}

changeOuterLinks()
export { changeOuterLinks };