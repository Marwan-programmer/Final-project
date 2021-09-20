import {Users,UserItem} from './users.js';
import Statics from './statics.js';
import {Posts,PostItem} from './posts.js'

const posts=document.querySelector("#posts");
const panale=document.querySelector("#panale");
const home=document.querySelector("#home");
const usersList=document.querySelector("#usersList");


/////Statics open dirctly
panale.innerHTML=Statics();

/////post that admin has published
posts.addEventListener("click" ,function(){

    panale.innerHTML=Posts();

    ///
    const postsItem=document.querySelector("#posts-items");


    fetch("http://localhost:3000/posts")
   .then(req => req.json())
   .then(res => {
      
    for(let i=res.length-1;i>-1;--i){
     
    postsItem.insertAdjacentHTML("beforeend",PostItem(res[i]));
     
    }
});
    

})




/////home admin that has Statics
home.addEventListener("click", function(){

    panale.innerHTML=Statics();

})



/////list of users 
usersList.addEventListener("click",function(){

panale.innerHTML=Users();
const tableUsers=document.querySelector("#table-users")


fetch("http://localhost:3000/allUsers")
   .then(req => req.json())
   .then(res => {
      let n=0;
    for(let i=res.length-1;i>-1;--i){
     n++
        tableUsers.insertAdjacentHTML("beforeend",UserItem(res[i],n));
     
    }


})

})