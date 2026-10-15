'use strict';
const toggle=document.querySelector('.menu-toggle');
const navigation=document.getElementById('navigation');
function closeMenu(){toggle.setAttribute('aria-expanded','false');navigation.classList.remove('open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){closeMenu();toggle.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
window.matchMedia('(min-width:1001px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
document.getElementById('year').textContent=new Date().getFullYear();

const staffSearch=document.getElementById('staff-search');
if(staffSearch){
 const cards=[...document.querySelectorAll('.staff-card')];
 function filterStaff(){const query=staffSearch.value.trim().toLocaleLowerCase();let count=0;cards.forEach(card=>{const visible=card.dataset.search.toLocaleLowerCase().includes(query);card.hidden=!visible;if(visible)count++;});document.getElementById('staff-status').textContent=count+' staff members'+(query?' found':'');document.getElementById('staff-empty').hidden=count!==0;const office=document.querySelector('.office-heading');if(office){office.hidden=![...office.nextElementSibling.querySelectorAll('.staff-card')].some(card=>!card.hidden);}}
 staffSearch.addEventListener('input',filterStaff);filterStaff();
}
