const accordianBtns=document.querySelectorAll('.accordian-btn')

accordianBtns.forEach(btn=>{
    btn.addEventListener('click',function(){
        // this.classList.toggle('active')
        const accordianDescription=this.nextElementSibling
        const plusIcon =this.querySelector('.plus-icon')
        const minusIcon =this.querySelector('.minus-icon')
        if(accordianDescription.style.maxHeight){
            accordianDescription.style.maxHeight=null
            plusIcon.style.display='block'
            minusIcon.style.display='none'
        }
        else{
            accordianDescription.style.maxHeight=accordianDescription.scrollHeight+'px'
            plusIcon.style.display='none'
            minusIcon.style.display='block'
        }
    })
})