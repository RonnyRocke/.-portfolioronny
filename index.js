const section=document.querySelectorAll('section')
const navlink=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    section.forEach(sec=>{
        let top=window.scrollY;
        let offset=set.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getattribute('id')
        if(top>=offset && top< offset + height){
            navlink.forEach(links=>{
                links.classlis.remove('active')
                document.querySelector('header nav a [hred*='+id+']').classList.add('active')
            })

        }


    })


var header=document.querySelector('header')
header.classList.toggle("sticky",window.scrollY>100)


menubar.classList.remove('bx-x')
navbar.classList.remove('active')
};
let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')
menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

var type=new Typed('.textline',{
    strings:['Desenvolvedor FullStack','Designer Gráfico','Cybersecurity'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:1000,
    loop:true

})

