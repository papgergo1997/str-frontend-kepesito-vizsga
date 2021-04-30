function changeOuterLinks() {
    const navElement = document.querySelector("nav#link-list");
    const aElements = document.querySelectorAll("nav#link-list a")
        .forEach(el => el.innerHTML.includes('outer') ? el.setAttribute('target', '_blank') : !el);

    navElement.style.display = 'flex';
    navElement.style.flexDirection = 'column';
    navElement.style.width = '30%';
}

changeOuterLinks()
export { changeOuterLinks };