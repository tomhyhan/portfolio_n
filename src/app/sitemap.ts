import { MetadataRoute } from 'next'
import { allPosts, Post } from 'contentlayer/generated'
import { algoPageGenerator } from '@/lib/xml_generator'

export default function sitemap(): MetadataRoute.Sitemap {
    const URL = process.env.BASE_URL || 'https://www.example.com/'
    const algoPageXml = algoPageGenerator(allPosts, URL);
    return [
        {
            url: URL,
            lastModified: new Date(),
        },
        {
            url: URL + '/algo',
            lastModified: new Date(),
        },
        {
            url: URL + '/skills',
            lastModified: new Date(),
        },
        {
            url: URL + '/projects',
            lastModified: new Date(),
        },
        ...algoPageXml
    ]
}