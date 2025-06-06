
const urlParams = new URLSearchParams(window.location.search);
const blogId = parseInt(urlParams.get("id"));


const blog = blogs.find(item => item.id === blogId);


if (blog) {
  document.getElementById("blog-title").textContent = blog.title;
  document.getElementById("blog-image").src = blog.image;
  document.getElementById("blog-content").innerHTML = blog.content;
} else {
  document.getElementById("blog-title").textContent = "Blog Not Found";
  document.getElementById("blog-content").textContent = "The blog you're looking for doesn't exist.";
}
