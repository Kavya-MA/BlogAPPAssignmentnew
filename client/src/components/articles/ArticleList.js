

import { Button } from "@mui/material";
import React from "react"

import "./Article.css"

const ArticleList=(props)=>{
    const { posts } = props;
    return (
        <div>
            
            {posts.map((i, key) => (
                <div key={key} className='comments'>
                    
                    
                    <h3 className='article_head'>{i.title}</h3>
                    <p>{i.article}</p>
                   <span className badge badge-secondary p-2>Author of Article - {i.authorname}</span>
                   <Button>Edit</Button>
                   <Button>Delete</Button>
                   
                </div>
            ))}
        </div>
    );
}

  
            
export default ArticleList;