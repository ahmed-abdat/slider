

const boult = document.querySelectorAll('button')


setInterval(() => {
    for (let i = 0; i < boult.length; i++) {
        if(boult[i].className === "active"){
         if(i === boult.length - 1){
             boult[0].click()
        }else {
            boult[i + 1].click()
         }
        }
     }
}, 3000);