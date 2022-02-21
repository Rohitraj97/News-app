async function apiCall(url) {


    //add api call logic here
    try{
        let res=await fetch(url)
        let articles=await res.json()
        return articles;
    }
    catch(error)
    {
        console.log("error:",error)
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach( (el) => {
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.urlToImage

        let source=document.createElement("p")
        source.innerText=el.source.name
            let desc=document.createElement("p")
            desc.innerText=el.description
        
            let content=document.createElement("p")
            content.innerText=el.content
        let title=document.createElement("p")
        title.innerText=el.title
        div.append(image,source,title,desc,content)
        div.onclick = () =>{
            var arr=[]
            arr.push(el)
            localStorage.setItem("article",JSON.stringify(arr))
            window.location.href="news.html"
        }
        main.append(div)
        
    });

}

export { apiCall, appendArticles }