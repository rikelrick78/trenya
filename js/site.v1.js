(function () {
    const h1List = document.getElementsByTagName('h1');
    const h2List = document.getElementsByTagName('h2');

    const h1Array = Array.from(h1List);
    const h2Array = Array.from(h2List);

    const allArray = h1Array.concat(h2Array);

    allArray.forEach(elem => elem.addEventListener("click", clickHandler));

    const displayTypes = {
        block: 'flex',
        none: 'none'
    };

    const isWindowMobile = window.innerWidth < 1024;

    function clickHandler(event) {
        const style = event.currentTarget.parentNode.querySelector('content').style;
        const display = style.display;
        console.log('display', display)

        if (display.length === 0) {
            style.display = isWindowMobile ? displayTypes.block : displayTypes.none;
        }
        else if (display === displayTypes.none) {
            style.display = displayTypes.block;
        }
        else if (display === displayTypes.block) {
            const contentList = event.currentTarget.parentNode.querySelectorAll('content');
            contentList.forEach(element => {
                element.style.display = displayTypes.none;
            });
            style.display = displayTypes.none;
        }
    }
})();