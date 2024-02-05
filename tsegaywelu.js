
const  tablinks=document.getElementsByClassName('tab-links')
const  tabcontents=document.getElementsByClassName('tab-contents')

function opensource(val){
   
    for(tablink of tablinks){
        tablink.classList.remove("active-link");

    }
    for( tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    
    switch(val){
        case 'Skills':
              document.getElementById(val).classList.add("active-tab");
            break;
        case 'Experience':
          document.getElementById(val).classList.add("active-tab");
            break;
        case 'Education':
          document.getElementById(val).classList.add("active-tab");
            break;

    }
}


function openmenu(){
  let sidemenu=document.getElementById('sidemenu');
  sidemenu.style.right="0";
}
function closemenu(){
  let sidemenu=document.getElementById('sidemenu');
  sidemenu.style.right="-200px";
  console.log("you clicked close menu")
}