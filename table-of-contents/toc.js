function buidTableofContents() {
    const main_container = document.querySelector('main');

    const ToC_container = document.createElement('nav');
    ToC_container.classList.add('table-of-contents');
    //use const as variable default

    let ToC = `
    <h3>Topics</h3>
    <ul>
`;

    const headers = document.querySelectorAll('#topics > h2');
    //.querySelector grabs only the first .querySelectorAll grabs all of that type

    for (const header of headers) {
        // element.getAttribute('href');

        // ToC += `<li><a href='#${header.getAttribute('id')}'>${header.innerText}</a></li>`;

        const text = header.innerText;
        const id = header.getAttribute('id');

        ToC += `<li><a href='#${id}'>${text}</a></li>`;
    }
    //for(const something of somethings) for(variable of array)

    ToC += '</ul>';

    ToC_container.innerHTML = ToC;

    //doesn't change source files dynamically adds it to the browser
    main_container.insertBefore(ToC_container, main_container.firstChild);

}

document.addEventListener('DOMContentLoaded', buidTableofContents);