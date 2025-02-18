const buttons = document.querySelectorAll(".hide");

    buttons.forEach(buttons =>{
        document.addEventListener('click', ()=>{
            const section = document.querySelector(".cookies");

            if(section){
                section.style.display ="none";
            }
        });
    });