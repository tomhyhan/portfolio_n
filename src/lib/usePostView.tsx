"use client";

import useSWR from 'swr';

async function getPostView(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response for getting post view was not ok');
  }
  const view = await response.json();
  return view;
}

async function updatePostView(slug:string) {
  console.log("upaate post view")
  const response = await fetch(process.env.BASE_URL + '/api/posts' + `/${slug}`, {
    method: 'POST',
  });

  if (!response.ok) {
    throw new Error('Network response for posting post view was not ok');
  }

  const views = await response.json();
  return views;
}

export default function usePostView(slug: string) {
  const { data, isLoading, error, mutate } = useSWR(
    process.env.BASE_URL + '/api/posts' + `/${slug}`,
    (url) => getPostView(url), {
      revalidateOnMount: false,
      dedupingInterval: 2000,
      refreshInterval: 1000,
    }
  );

  const updateView = async () => {
    let data;
    try {
      data = await updatePostView(slug)
    } catch (_) {
      data = {view: 0}
    }
    mutate({...data, view: data.view});
  }

  return {
    data,
    error: isLoading || error || !data,
    updateView
  };
}
