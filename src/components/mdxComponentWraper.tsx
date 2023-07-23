import React from 'react'

import { getMDXComponent } from 'next-contentlayer/hooks'
import Information from './mdxhelper/information'
import Warning from './mdxhelper/warning'
import Note from './mdxhelper/note'
export default function MdxComponentWraper({code}: {
    code: string
} ) {
    const Content = getMDXComponent(code)
      
  return <Content components={{Information, Warning, Note}}/>
}
