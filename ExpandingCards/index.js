const panels =document.querySelectorAll('.panel')


panels.forEach((panel)=>{
    
    panel.addEventListener('click',()=>{
        removeActClass()
        panel.classList.add('active')
    })
})

 function removeActClass(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
 }