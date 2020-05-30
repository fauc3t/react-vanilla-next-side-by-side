import React from 'react';
import Head from 'next/head'

const title = 'Blog Post 1';
const description = 'Testing side by side';

function BlogPost() {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta itemprop="name" content={title} />
            <meta itemprop="description" content={description} />
        </Head>
        <h2>Blog Post 1</h2>
    </div>
  )
}

export default BlogPost;