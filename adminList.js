const posts=document.querySelector("#posts");
const panale=document.querySelector("#panale");
const home=document.querySelector("#home");

posts.addEventListener("click" ,function(){

    panale.innerHTML=`<div id="posts-admin">
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



 <div class="post-item">
 <div class="title">
    <a href="#"> <h1>this is the first </h1>
    <span>1 day ago</span>
    </a>

 </div>

 <div class="info-post">
     <span>...</span>
 </div>

</div>
 </div>



    </div>
    `
    

})


home.addEventListener("click", function(){

    panale.innerHTML=` <div id="MyHome">

    <div class="status">
        <div class="likes">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="thumbs-up" class="svg-inline--fa fa-thumbs-up fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"/></svg>
            <span>
                66
            </span>
        </div>
        <div class="members">
            <span>32</span>
        </div>
    </div>
</div>`

})