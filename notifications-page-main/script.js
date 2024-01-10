const contents=document.querySelectorAll(".content");
function markAllRead(){
    for(let i=0;i<contents.length;i++){
        let element=contents[i];
        if(element.classList.contains("not-read")){
            element.classList.remove("not-read");
        }
    }
}