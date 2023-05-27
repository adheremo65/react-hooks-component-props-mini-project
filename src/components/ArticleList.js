import React from "react";
import Article from "./Article";



function ArticleList({posts}){
    const each = posts.map((item)=> <Article key = {item.id} post = {item} title = {item.title} date = {item.date} preview = {item.preview}/>)
    console.log(each)
    return (
        <main>
           {each}
        </main>
    )
}
export default ArticleList;
