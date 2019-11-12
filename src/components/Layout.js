import React, { useState } from 'react'

export const Layout = () => {
  const [title/*, setTitle */] = useState('Welcome to React SSR')

  return (
    <main>
      <h1>{title}</h1>
    </main>
  )
}
