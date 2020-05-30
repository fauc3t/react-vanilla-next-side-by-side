import React from 'react';
import Head from 'next/head'

const title = 'Sample About';
const description = 'Testing side by side';

function About() {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta itemprop="name" content={title} />
            <meta itemprop="description" content={description} />
        </Head>
        <h2>About</h2>
    </div>
  )
}

export default About;