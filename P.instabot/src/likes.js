//library import

const puppeteer = require('puppeteer');

// # set

const rash = "likeforlikes";

const url = 'https://www.instagram.com/explore/tags/'+rash;

//Bot name config

const firstname = ['ehyte', 'ragdno', 'nudro' ,'bhe', 'nytra', 'torme' ,'hany','trahy','tonhy','tranhy'];

const secondname = ['fhog','fetus','drago', 'nabc', 'mhoje', 'mage','fadecx', 'sytr','baltazar','gaspar'];

const math = Math.floor(Math.random() * 10);

const math2 = Math.floor(Math.random() * 10);

const botname = firstname[math] + ' '+ secondname[math2];

console.log(botname);  

async function bot()  {

  
  //User information

     const user = document.getElementById("login").value;

     const password =document.getElementById("pass").value ;
 

 //variable set

     
    const browser = await puppeteer.launch({headless: true});
    
    const page = await browser.newPage();

    alert("You have iniciated the Bot");
    
    l=0
    
    document.getElementById("botname").innerText = botname;

    document.getElementById("likes").innerText = l;

    document.getElementById("total").innerText = 0;

    //page get

     
     await page.goto('https://www.instagram.com/accounts/login/');
   
     await page.waitForSelector('input[name="username"]');
  
   //login

    
     await page.type('input[name="username"]', user);
    
     await page.type('input[name="password"]', password);
     
     await page.click('button[type="submit"]');

     console.log("Have loged in");
  
  
     await page.waitFor(3000);

    //goto creator profile 

    await page.goto('https://www.instagram.com/v.vicentt');
   
    await page.waitFor(2000);

    await page.click('button._5f5mN');
   
     //go to a # 
     

     await page.waitFor(4000);
 
     await page.goto(url);
  
   //photo selection
 
     await page.click('div.eLAPa');


   //pohto
    
     for(i=1;i<5000;i++){
       
      var rand = Math.floor(Math.random() * 100) + 1;
     
      document.getElementById("total").innerText = i;
     
      if(rand > 28){

         //like photo
         try{

         await page.waitFor(2000);
         
         await page.click('span.fr66n button.wpO6b');
        
         l++

         document.getElementById("likes").innerText = l;
        
        }catch{
          alert("Bot error please re iniciate");
          page.close();
        };

        };
        
       //skip photo
      
         await page.waitForSelector('a._65Bje')
         
         await page.waitFor(2000)

         await page.click('a._65Bje');

      };
      alert(botname + " has finished")
      page.close();
  
    }

//signature G4lile0