"use client";
import { projectCategories, projects } from '@/lib/projectType';
import clsx from 'clsx';
import React, { useState } from 'react'
import CategoryBtn from './categoryBtn';
import Link from 'next/link';
import Image from 'next/image';
import Project from './project';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectTabs() {
    const [currentCategory, setCurrentCategory] = useState("All");
    const handleCategoryClick=(category: string) => {
      setCurrentCategory(category)
    }

    return (
      <main className="h-full w-full">
         <div className="flex  justify-center items-center m-0 p-0 ">
          {projectCategories.map((category, idx) => 
            <CategoryBtn 
            key={idx} 
            category = {category}
            currentCategory={currentCategory}
            onClickCategory={handleCategoryClick}
            />
          )}
         </div>
        <div className="flex justify-center items-center flex-wrap">
          {projects.filter(project => {
            if(currentCategory == "All") return true;
            else return project.category == currentCategory;
            }).map(project => 
              <Project key={uuidv4()} project={project} />
            )}
        </div>
      </main>
      )
}

// text-blue-800 bg-blue-200