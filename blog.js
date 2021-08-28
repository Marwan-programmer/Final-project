

let dataPost="";

const blog=document.querySelector("#content-bloge")
fetch("http://localhost:3000/posts")
.then(req => req.json())
  .then(res => {
      
    console.log(res[0].PostText);
    for(let i=0;i<res.length;i++){


        blog.insertAdjacentHTML("beforeend",`
        
        <div class="blog">
    <div class="container-blog">
    <div class="title-img">
      <h1>${res[i].postTitle}</h1>
    </div>
    <div class="img-box">
    <img src="${res[i].PostImage}">
    </div>
    <div class="blog-content" style="white-space: pre-line">
    ${res[i].PostText}
    </div>
    
    <div class="like-comment">
    <span class="like"><img src="./18764067051529659194-512.png"></span>
    <span class="comment">Comment</span>
    </div>
    
    
    
    <div class="all-comment" id="inside">
    <div class="comment-content">
    <img src="مروان.jpeg">
    <span>hello my friend where have you been</span>
    </div>
    
    
    <div class="comment-content">
    <img src="مروان.jpeg">
    <span>hello my friend where have you been</span>
    </div>
    
    
    
    <div class="comment-content">
    <img src="مروان.jpeg">
    <span>hI love the sarcasm, nobody gets it....</span>
    </div>
    
    
    
    <div class="comment-content">
    <img src="مروان.jpeg">
    <span>hello my friend where have you been</span>
    </div>
    </div>
    
    
    <div class="r-commment">
    <img src="مروان.jpeg">
    <input type="text" name="" id="com" placeholder="write a comment....">
    </div>
    <!-- end of blog -->
    </div>
    </div>
        `)
    }


    // blog.innerHTML=`${res[6].PostText}`
    

});

