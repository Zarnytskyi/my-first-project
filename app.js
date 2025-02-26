const buttons = document.querySelectorAll(".hide");

    buttons.forEach(button =>{
        document.addEventListener('click', ()=>{
            const section = document.querySelector(".cookies");

            if(section){
                section.style.display ="none";
            }
        });
    });