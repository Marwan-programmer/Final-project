
import {Post} from  './singlePost.js'
window.like= like;
window.submitForm= submitForm;

const blog=document.querySelector("#content-bloge");

/////get all posts by fetch
fetch("http://localhost:3000/posts")
.then(req => req.json())
  .then(res => {
      
    for(let i=res.length-1;i>-1;--i){
     
      blog.insertAdjacentHTML("beforeend",Post(res[i]));
     console.log(i)
   
    }
    comment();

});



function like(index) {
 let likeIndex= index.getAttribute("data");

 const like=document.querySelector(`#icon-${likeIndex}`)
 

 let dataLike={
  postId:likeIndex
 }

 let token=localStorage.getItem('token')



 console.log(token)
 const option = {
     method: "POST",
     headers: {
       'Content-Type': 'application/json',
       'Authorization':"Bearer "+token
   ,
     
   },
   body: JSON.stringify(dataLike),
 }

 function active(){
  like.classList.toggle('active-like');
 }
fetch('http://localhost:3000/like',option)
.then(responde=>responde.json())
.then(result=>{

  console.log(result)
  active()

})



}




// function comment(){

//   const contentBlog = document.getElementById('#content-bloge');

//   console.log(contentBlog)
//   contentBlog.addEventListener("submit",function(e){

// e.preventDefault();
// alert("there is event ")

//   })


// }

// function comment(e){
//   console.log(e.value)
//   console.log(e.keyCode)
// //   if (e.keyCode === 13) {
// //     console.log('Enter')
// // }

// }


function submitForm(e){
e.preventDefault();
console.log(e.target.getAttribute("data-comment-post"));
let num=e.target.getAttribute("data-comment-post");
const input=document.querySelector(`#com${num}`);

 const text=document.querySelector(`#body-content-${num}`);


// text.innerHTML=`<div class="comment-content" >
// <img src="../images/مروان.jpeg">
// <span id="text-comment">${input.value}</span>
// </div>` ;
text.insertAdjacentHTML('beforeend',`<div class="comment-content" >
<img src="../images/مروان.jpeg">
<span id="text-comment">${input.value}</span>
 </div>`)

console.log(input.value)
input.value="";

}