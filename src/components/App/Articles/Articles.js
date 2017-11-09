import React from 'react'

import ArticleLink from './ArticleLink'

export default ({ articles }) => (
    <div>
        {
            articles.map(({ id, title }) => <ArticleLink
                key={id} 
                id={id} 
                title={title} 
            />)
        }
    </div>
)