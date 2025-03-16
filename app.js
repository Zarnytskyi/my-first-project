const buttons = document.querySelectorAll(".hide");

    buttons.forEach(button =>{
        document.addEventListener('click', ()=>{
            const section = document.querySelector(".cookies");

            if(section){
                section.style.display ="none";
            }
        });
    });

    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          item.classList.toggle('active');
        });
      });