'use client'
import { useUnit } from 'effector-react'
import Link from 'next/link'
//import '../../../app/globalStyles/header.css'
import Menu from './Menu'
import { $searchModal, openMenu, openSearchModal } from '@/context/modals'
import { addOverflowHidenToBody } from '@/lib/utils/common'
import Logo from '@/components/elements/Logo'
import { useLang } from '@/hooks/useLang'
import CartPopup from './CartPopup/CartPopup'

const Header = () => {
  const { lang, translations } = useLang()
  const searchModal = useUnit($searchModal)

  const handleOpenMenu = () => {
    addOverflowHidenToBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverflowHidenToBody()
  }

  return (
    <header className='header'>
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button
              className='btn-reset header__links__item__btn header__links__item__btn--search '
              onClick={handleOpenSearchModal}
            />
          </li>
          <li className='header__links__item'>
            <Link
              className='header__links__item__btn header__links__item__btn--favorites'
              href='/favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              className='header__links__item__btn header__links__item__btn--compare'
              href='/comparison'
            />
          </li>
          <li className='header__links__item'>
            <CartPopup />
          </li>
          <li className='header__links__item'>
            <Link
              className='header__links__item__btn header__links__item__btn--profile'
              href='/profile'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
