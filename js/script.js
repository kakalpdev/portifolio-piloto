document.querySelector("#itens").addEventListener("wheel", Event => {
    if (Event.deltaY > 0){
        event.target.scrollBy(150, 0)
    } else{
        event.target.scrollBy(-150, 0);
    }
})