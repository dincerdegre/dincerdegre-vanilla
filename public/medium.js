fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dincerdegre')
   .then((res) => res.json())
   .then((data) => {
      const res = data.items 
      const posts = res.filter(item => item.categories.length > 0)
      console.log(posts);
      console.log();
      function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
      }
      function shortenText(text,startingPoint ,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
      }


      output = `
      <div class="card">
      <img src="${posts[0].thumbnail}" class="card-img-top" alt="${posts[0].title}">
      <div class="card-body">
        <h5 class="card-title">${posts[0].title}</h5>
        <p class="card-text">${shortenText(toText(posts[0].description),0,200)}...</p>
        <a href="${posts[0].link}" class="btn btn-primary" target="_blank">Yazıyı Oku</a>
      </div>
    </div>
    
      `;
      document.querySelector('#latest_post').innerHTML = output
     
})

