(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const  mobileMenuRef =document.querySelector("[data-menu]");
   const expanded= menuBtnRef.addEventListener("click",()=>{
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute('aria-expanded', !expanded);
        mobileMenuRef.classList.toggle("is-open");
    })
    
  })();