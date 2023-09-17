"use client";

import React from 'react'

export default function Fallback({ error }: {
    error: Error
}) {

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <p >Try Reloading the page</p>
    </div>
  )
}
