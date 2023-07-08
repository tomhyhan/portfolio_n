import { projectCategoryType } from '@/lib/projectType';
import clsx from 'clsx';
import React from 'react'

export default function CategoryBtn({category, currentCategory, onClickCategory}: {
    category: projectCategoryType,
    currentCategory: string,
    onClickCategory: (category:string) => void
}) {
    const isClicked = category.name == currentCategory;
    return <div className="group">
        <button  onClick={() => onClickCategory(category.name)} className={clsx("m-3  group-hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center", 
                              isClicked? "bg-blue-400": "bg-gray-300")}>
          <span>{category.name}</span>
          <span className={clsx("inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold group-hover:text-blue-800 group-hover:bg-blue-200 rounded-full",
                              isClicked? "text-blue-800 bg-blue-200": "text-blue-800 bg-gray-400"
          )}>
            {category.num}
          </span>
        </button>
      </div>
      
}
