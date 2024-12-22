
//---Navbar----Button----Click----Start------
   let header = document.querySelector('header');
   let menu = document.querySelector('#menu-icon');
   let navbar = document.querySelector('.navbar');

         menu.onclick = () => {
           navbar.classList.toggle('active');
           };
 //---Navbar----Button----Click----End-------




 //---Dark---Mood---Button-----Start-------
    let darkmood = document.querySelector('#darkmood');
        darkmood.onclick = () => {
            if(darkmood.classList.contains('fa-moon')){
                darkmood.classList.replace('fa-moon', 'fa-sun');
                document.body.classList.add('active');
            }else{
                darkmood.classList.replace('fa-sun', 'fa-moon');
                document.body.classList.remove('active');  
            }
        }
 //---Dark---Mood---Button-----End-------