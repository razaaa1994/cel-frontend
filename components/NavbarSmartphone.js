import Link from 'next/link';
import Image from 'next/image';
import styles from './NavbarSmartphone.module.scss';
import { useState } from 'react';
import Icon_connect from '../public/assets/img/svgs/icon-page-connect.svg';
import Icon_home from '../public/assets/img/svgs/icon-menu-home.svg';
import Icon_theme from '../public/assets/img/svgs/icon-menu-themes.svg';
import Icon_abos from '../public/assets/img/svgs/icon-menu-abonnements.svg';
import Icon_aLaUne from '../public/assets/img/svgs/icon-menu-une.svg';
import SigninForm from './auth/SigninForm';
//
const NavbarSmartphone = () => {
  const [isOpen, toggleMenu] = useState(false);
  const [displayForm, toggleForm] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <a>
            <Image
              className={styles.logo}
              src='/logos/logo-green-flash-1-ligne.svg'
              alt=''
              width={230}
              height={40}
            />
          </a>
        </Link>
        <Image
          className={styles.logo}
          src={
            isOpen === true
              ? '/assets/img/navigation-icons-png/icon-menu-cross@3x.png'
              : '/assets/img/navigation-icons-png/icon-menu-burger@3x.png'
          }
          alt={isOpen === true ? 'close menu button' : 'open menu button'}
          width={32}
          height={32}
          onClick={() => toggleMenu(!isOpen)}
        />
      </nav>
      <div
        className={`${styles.sideMenuContainer + ' ' + styles.svg} ${
          isOpen === true ? styles.active : ''
        }`}>
        <div
          className={styles.menuLogin}
          onClick={() => toggleForm(!displayForm)}>
          <Icon_connect className={styles.icon} />
          <p className={styles.p}>Connexion/Inscription</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.btnRose}>SOUMETTRE</button>
          <button className={styles.btnTransparent}>MODÉRER</button>
        </div>
        <div className={styles.menuItemContainer}>
          <div className={styles.item}>
            <Icon_home className={styles.icon} />
            <p className={styles.p}>Accueil</p>
          </div>
        </div>
        <div className={styles.menuItemContainer}>
          <div className={styles.item}>
            <Icon_theme className={styles.icon} />
            <p className={styles.p}>Thèmes</p>
          </div>
        </div>
        <div className={styles.menuItemContainer}>
          <div className={styles.item}>
            <Icon_abos className={styles.icon} />
            <p className={styles.p}>Mes abonnements</p>
          </div>
        </div>
        <div className={styles.menuItemContainer}>
          <div className={styles.item}>
            <Icon_aLaUne className={styles.icon} />
            <p className={styles.p}>A la une</p>
          </div>
        </div>
      </div>
      {displayForm && <SigninForm />}
    </>
  );
};

export default NavbarSmartphone;