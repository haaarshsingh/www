import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import time from 'reading-time'

const blogsDirectory = path.join(process.cwd(), 'blog')

export const getSortedBlogsData = () => {
  const fileNames = fs.readdirSync(blogsDirectory)
  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)
    const readingTime = Math.floor(time(matterResult.content).minutes) + 1

    return {
      id,
      readingTime,
      ...matterResult.data,
    }
  })

  return allBlogsData.sort((a, b) => {
    // @ts-ignore
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export const getAllBlogIds = () => {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export const getBlogData = async (id: string) => {
  const fullPath = path.join(blogsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const contentHtml = matterResult.content

  const readingTime = Math.floor(time(contentHtml).minutes) + 1

  return {
    id,
    readingTime,
    contentHtml,
    ...matterResult.data,
  }
}
