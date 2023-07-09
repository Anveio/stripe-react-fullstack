import React from 'react'
import './index.scss'

const t = {
  title: 'Blog'
}

const Blog = () => {
  return (
    <main id='blogPage'>
      <h1 id='blogPageTitle'>{t.title}</h1>
    </main>
  )
}

export default Blog;
