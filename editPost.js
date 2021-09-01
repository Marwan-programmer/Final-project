// let dataImg=""
// let dataTitle="";


const editor=document.querySelector("#text-post-content");

editor.addEventListener("input",function(){
    const span=document.querySelector("#placeholder");
    if(editor.contains(span)){
        span.remove();

    }

    if(editor.textContent==""){
        editor.innerHTML=`<span placeholder="text" contenteditable="false" id="placeholder"></span>` 
// alert("empty text")

}

})



const inputImg=document.querySelector("#input-img");
const img=document.querySelector("#img-edit");
const title=document.querySelector("textarea");
const contenteditable = document.querySelector('[contenteditable]');

let imgValue="";
let titleValue="";
let text="";


inputImg.addEventListener("input",function(){

  imgValue  = inputImg.value;
 img.src = imgValue; 

})



const publish=document.querySelector("#publish");
let allText="";
let dataPost=""/////all data to the post complate

publish.addEventListener("click", function(){
    titleValue=title.value;
const data={

    contenteditable:contenteditable.textContent,
    img:img.src,
    title:titleValue
     

}    
// console.log(data)
// console.log(contenteditable.childNodes[0].nodeValue)
 text=`${contenteditable.childNodes[0].textContent} \n`;
// let dataText={first:contenteditable.childNodes[0].textContent}
for(let i=0;contenteditable.childElementCount>i;i++){
    // console.log(contenteditable.children[i].textContent);
  
    
    // dataText['p' + i] = contenteditable.children[i].textContent;
     text+=`${contenteditable.children[i].textContent} \n`;
     

 


}
// allText+=
// console.log("alltext",dataText.length)

// console.log(dataText)
console.log("text", text)
// console.log("div",contenteditable.textContent)
// console.log("line","we are \n \n\n and")
 dataPost={
    img:  imgValue,
    title: titleValue,
     text:  text
}
 


let headers = new Headers();////
headers.append('Content-type', 'application/json');
let option = {
	method: 'POST',
	body: JSON.stringify(dataPost),
	headers
};


fetch("http://localhost:3000/posts",option)
.then(req => req.json())
  .then(res => {
      
    console.log(res)

});



})

// const btnView=document.querySelector("#btn-view")










let name ="marwan"

export default name ;

