import { FC } from 'react'

export const Header: FC = () => {
  return (
    <header className="items-center flex fixed object-top z-10 shadow-sm px-2 h-14 w-full">
      <nav className="ml-2 w-80">
        <p>Next.js Strapi Firebase Auth</p>
      </nav>
    </header>
  )
}
