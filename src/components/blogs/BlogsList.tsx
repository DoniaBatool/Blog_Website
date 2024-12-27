"use client"
import { BlogsItem } from "@/types/blogs"
import {useEffect, useState} from "react"
import { fetchBlogs } from "@/lib/fetchBlogs";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import BlogsCard from "../BlogsCard";

const BlogsList = () => {
const [blogs, setBlogs] = useState<BlogsItem[]>([]);
const [category , setCategory] = useState<string>("");
const [search, setSearch] = useState<string>("") 

useEffect(()=>{
    const getblogs = async () => {
    const data = await fetchBlogs (category, search);
    setBlogs(data)    
    }
    getblogs()

},[category,search])

  return (
    <div className="px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5">
        <SearchBar onSearch = {setSearch}/>
        <CategoryFilter onCategoryChange={setCategory}/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 
      lg:grid-cols-3 gap-5 justify-between">
            {
                blogs.map((item:BlogsItem)=>(
                    <BlogsCard key={item?._id} item={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default BlogsList