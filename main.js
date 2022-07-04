const toggleBtn = document.querySelector('.toggle-btn');
const navigation = document.querySelector('.navigation');


toggleBtn.addEventListener('click', () => {
  if(toggleBtn.classList.contains('active')){
    toggleBtn.classList.remove('active');  
    navigation.classList.remove('navigation-active');
  }else{
    toggleBtn.classList.add('active');  
    navigation.classList.add('navigation-active');
  }
});
navigation.addEventListener('click', (e)=>{
if (e.target.classList.contains('nav-link')){
  toggleBtn.classList.remove('active');  
  navigation.classList.remove('navigation-active');
}
})


