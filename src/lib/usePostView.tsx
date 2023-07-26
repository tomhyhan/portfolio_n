"use client";

import useSWR from 'swr';
//  will useEffect work here?



async function getPostView(url: string) {
  console.log('get', url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response for getting post view was not ok');
  }
  const views = await response.json();
  return views;
}

async function updatePostView() {
  const response = await fetch(process.env.BASE_URL + '/api/posts', {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Network response for posting post view was not ok');
  }

  const views = await response.json();
  return views;
}

export default function usePostView(slug: string) {
  const URL = process.env.BASE_URL + '/api/posts';
  console.log('url:', URL + `/${slug}`);
  console.log('url2:', process.env.BASE_URL);
  const { data, isLoading, error, mutate } = useSWR(
    process.env.BASE_URL + '/api/posts' + `/${slug}`,
    (url) => getPostView(url)
  );
  // "http://localhost:3000/api/posts"
  console.log('data from usePostView', data);
  // console.log("data from usePostView", data)
  // return {
  //     data
  // }
  return {
    data: 0,
  };
}
