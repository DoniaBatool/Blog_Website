import React from 'react';
import { BlogsItem } from '@/types/blogs';
import Link from "next/link";
import Image from 'next/image';
import { Button } from './ui/button';

interface BlogsCardProps {
  item: BlogsItem;
}

const BlogsCard = ({ item }: BlogsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-sm flex flex-col justify-between h-full">
      {/* Blog Image */}
      <Link href={`/blogs/${item._id}`}>
        <Image
          src={item?.imageUrl}
          alt={item?.title}
          width={500}
          height={500}
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-300"
        />
      </Link>

      {/* Content */}
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-3 line-clamp-2 h-14">
          {item?.title.substring(0, 65)}
        </h2>
        <p className="mb-4 text-gray-600 line-clamp-3 h-16">
          {item?.description.substring(0, 85)}...
        </p>
      </div>

      {/* Read More Button */}
      <div className="mt-auto">
        <Link href={`/blogs/${item._id}`}>
          <Button className="w-full">Read More</Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
