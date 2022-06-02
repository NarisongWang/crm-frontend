import React from 'react'
import { Footer } from './partial/Footer.comp'
import { Header } from './partial/Header.comp'

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
      <header className='header'><Header /></header>
      <main className='main mt-2'>{children}</main>
      <footer className='footer'><Footer /></footer>
    </div>
  )
}
