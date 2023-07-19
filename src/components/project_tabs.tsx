"use client";
import { projectCategories, projects } from '@/lib/projectType';
import React, { useState } from 'react'
import CategoryBtn from './categoryBtn';
import Project from './project';
import { v4 as uuidv4 } from 'uuid';
import { delay } from '@/lib/utils';



export default function ProjectTabs() {
    const [currentCategory, setCurrentCategory] = useState("All");
    const [disappear, setDisappear] = useState(false);
    const handleCategoryClick= async (category: string) => {
      setDisappear(true)
      await delay(250)
      setDisappear(false)
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
              <Project 
                key={uuidv4()} 
                project={project} 
                disappear={disappear}/>
            )}
        </div>
      </main>
      )
}

// text-blue-800 bg-blue-200