
import BlogsList from '@/components/blogs/BlogsList'
import React from 'react'

const Blogspage = () => {
  return (
    <section className="py-12">
      <h2 className='text-2xl font-bold mb-8'>Latest Blogs</h2>
      <BlogsList/>
    </section>
  )
}

export default Blogspage
