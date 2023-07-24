// 87b42976a0e242a1b480170f58623647 api key for news
let newsaccordian=document.getElementById("newsaccordion")
const xhr=new XMLHttpRequest()
sources="bbc-news"
apiKey="87b42976a0e242a1b480170f58623647"
xhr.open('GET',`http://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`,true)
xhr.onload=function (){
  if (this.status===200){
    json=JSON.parse(this.responseText)
    let newsHtml=""

    console.log(json)
    articles=json.articles
    articles.forEach(function (e,index){
     let news =`<div class="card">
    <div class="card-header" id="heading${index}">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
          ${e["title"]}
        </button>
      </h2>
    </div>

    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordion">
      <div class="card-body">
        ${e["content"]}
        <a href="${e["url"]}">Read More</a>
      </div>
    </div>
  </div>`
      newsHtml+=news;
    });

    newsaccordian.innerHTML=newsHtml
  }
  else {
    console.log('Error')
  }
}

xhr.send()


