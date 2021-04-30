function changeOuterLinks() {
    const navElement = document.querySelector("nav#link-list");
    const aElements = document.querySelectorAll("nav#link-list a")
        .forEach(el => {
            if (el.innerHTML.includes('outer')) {
                el.setAttribute('target', '_blank');
                el.innerHTML = `<strong>${el.innerHTML}</strong>`;
            }
        });
    navElement.style.display = 'flex';
    navElement.style.flexDirection = 'column';
    navElement.style.width = '30%';
    navElement.style.margin = '0 auto';
    navElement.style.border = '1px solid blue';
    navElement.style.padding = '16px';
}


export { changeOuterLinks };