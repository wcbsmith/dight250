const Tooltips = { //capitalize first letter is usually objects
    
    build: () => { //=>fat arrow is the standard practice instead of function()
    
        const links = document.querySelectorAll('a');

        for (const link of links) { //naming practice singular of plural is everywhere
            
            if (link.getAttribute('title') && link.getAttribute('title').length > 0) {
                
                const container = document.createElement('span');

                container.classList.add(
                    'tipcontainer',
                    link.getAttribute('class')
                );

                link.parentNode.replaceChild(container, link);

                container.appendChild(link);

                link.addEventListener('mouseover', Tooltips.show);
                link.addEventListener('focus', Tooltips.show);
                link.addEventListener('mouseout', Tooltips.hide);
                link.addEventListener('blur', Tooltips.hide);
                //link.addEventListener('')
            }
        }
    },

    show: (event) => {

        event.preventDefault(); //one way to prevent the default behavior, the better way 

        const link = event.currentTarget;

        if (!link.nextSibling) { //prevents the creation of additional spans
            const tip = document.createElement('span');

            tip.classList.add('tooltip');

            tip.textContent = link.getAttribute('title');

            link.parentNode.appendChild(tip);

            // link.setAttribute('title', ''); Another way to prevent the default behavior
        }
    },

    hide: (event) => {
        //event.preventDefault();

        const link = event.currentTarget;

        if (link.nextSibling) {

            link.nextSibling.remove();

        }
    },

};

document.addEventListener('DOMContentLoaded', Tooltips.build);