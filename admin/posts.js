function Posts(){

    return`
    <div id="posts-admin">
    <div class="header-panale">
         <h1>Posts </h1>
         <p>Create, edit, and manage the posts on your site.</p>
 </div>



 <div class="post-list">
 <div class="header-list">
     <span>Posts</span>
     <span></span>
     <a href="./postAdminEdit.html">Add new post</a>
 </div>

<div class="posts-items" id="posts-items">\


<div>


 </div>



    </div>
    `
}



function PostItem(result){
return ` <div class="post-item" id="${result.id}">
<div class="title">
 <a href="#"> <h1>${result.postTitle} </h1>
 <span>1 day ago</span>
 </a>

 </div>

<div class="info-post">
  <span>...</span>
</div>

</div>`

}

export { Posts,PostItem};
