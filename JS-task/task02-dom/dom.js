function changeOuterLinks() {
    const navElements = document.querySelectorAll("nav#link-list a")
        .forEach(el => el.innerHTML.includes('outer') ? el.setAttribute('target', '_blank') : !el);
}

changeOuterLinks()
export { changeOuterLinks };