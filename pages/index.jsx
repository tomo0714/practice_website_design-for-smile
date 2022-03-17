import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <header class="header">
        <h1 class="header__logo">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="260"
              height="28.204"
              viewBox="0 0 260 28.204"
            >
              <g id="site-logo" transform="translate(-59 -29)">
                <path
                  id="前面オブジェクトで型抜き_1"
                  data-name="前面オブジェクトで型抜き 1"
                  d="M14,35.2A13.9,13.9,0,0,1,6.785,33.19h8.848a14.228,14.228,0,0,0,8.847-2.739A13.97,13.97,0,0,1,14,35.2ZM4.822,31.752h0a14.17,14.17,0,0,1,0-21.3Zm10.54-3.117H10.33V13.771h5.032a8.094,8.094,0,0,1,5.682,1.994,7.233,7.233,0,0,1,2.138,5.439,7.234,7.234,0,0,1-2.138,5.439,8.093,8.093,0,0,1-5.682,1.99ZM25.007,12.39a13.9,13.9,0,0,0-9.373-3.174H6.463a13.932,13.932,0,0,1,13.76-.749,14.157,14.157,0,0,1,4.785,3.922Z"
                  transform="translate(59 22)"
                  fill="#fff"
                />
                <path
                  id="DIGSMILE"
                  d="M2.38-23.8H13.634a15.731,15.731,0,0,1,6.936,1.465,11.018,11.018,0,0,1,4.692,4.155,11.723,11.723,0,0,1,1.666,6.3,11.723,11.723,0,0,1-1.666,6.3A11.018,11.018,0,0,1,20.57-1.423,15.731,15.731,0,0,1,13.634.042H2.38ZM13.362-5.34a6.893,6.893,0,0,0,4.913-1.737,6.262,6.262,0,0,0,1.853-4.8,6.262,6.262,0,0,0-1.853-4.8,6.893,6.893,0,0,0-4.913-1.737H9.112V-5.34ZM30.634-23.8h6.732V.042H30.634ZM58.276-12.39h5.95v9.877A15.5,15.5,0,0,1,59.534-.265a18.642,18.642,0,0,1-5.3.783A14.166,14.166,0,0,1,47.5-1.065a11.8,11.8,0,0,1-4.692-4.411,12.18,12.18,0,0,1-1.7-6.4,12.18,12.18,0,0,1,1.7-6.4,11.747,11.747,0,0,1,4.726-4.411,14.514,14.514,0,0,1,6.834-1.584,15.2,15.2,0,0,1,5.984,1.124,11.536,11.536,0,0,1,4.42,3.236l-4.284,3.883a7.546,7.546,0,0,0-5.78-2.657,6.693,6.693,0,0,0-4.93,1.856,6.67,6.67,0,0,0-1.87,4.955,7.208,7.208,0,0,0,.85,3.525,6.1,6.1,0,0,0,2.38,2.418,6.969,6.969,0,0,0,3.5.868,8.588,8.588,0,0,0,3.638-.783ZM77.044.519A21.967,21.967,0,0,1,71.434-.2,13.786,13.786,0,0,1,67.014-2.1l2.21-4.973a14.289,14.289,0,0,0,3.706,1.7,14.086,14.086,0,0,0,4.148.647q3.876,0,3.876-1.941a1.607,1.607,0,0,0-1.105-1.516A20.3,20.3,0,0,0,76.3-9.222a33.866,33.866,0,0,1-4.488-1.243,7.554,7.554,0,0,1-3.094-2.129,5.758,5.758,0,0,1-1.292-3.951,6.848,6.848,0,0,1,1.19-3.934,7.965,7.965,0,0,1,3.553-2.776,14.6,14.6,0,0,1,5.8-1.022,20.415,20.415,0,0,1,4.624.528A14.146,14.146,0,0,1,86.6-22.2l-2.074,5.007a13.837,13.837,0,0,0-6.6-1.839,5.522,5.522,0,0,0-2.924.6,1.787,1.787,0,0,0-.918,1.55,1.536,1.536,0,0,0,1.088,1.43,19.646,19.646,0,0,0,3.5.988,32.762,32.762,0,0,1,4.5,1.243,7.779,7.779,0,0,1,3.094,2.112,5.646,5.646,0,0,1,1.309,3.934A6.714,6.714,0,0,1,86.394-3.3,8.114,8.114,0,0,1,82.824-.52,14.418,14.418,0,0,1,77.044.519ZM112.336.042l-.068-12.636-6.12,10.286h-2.992L97.07-12.253V.042H90.848V-23.8H96.39l8.364,13.76,8.16-13.76h5.542L118.524.042ZM123.454-23.8h6.732V.042h-6.732Zm11.7,0h6.732V-5.305h11.356V.042H135.15Zm40.018,18.63V.042H156.06V-23.8h18.666v5.211h-12v4.019H173.3v5.041H162.724v4.359Z"
                  transform="translate(89 55)"
                  fill="#fff"
                />
                <path
                  id="INC."
                  d="M1.54-15.4H5.9V0H1.54Zm22.22,0V0H20.174l-6.8-8.206V0H9.108V-15.4h3.586l6.8,8.206V-15.4ZM34.628.308A9.114,9.114,0,0,1,30.283-.715a7.65,7.65,0,0,1-3.025-2.849,7.858,7.858,0,0,1-1.1-4.136,7.858,7.858,0,0,1,1.1-4.136,7.65,7.65,0,0,1,3.025-2.849,9.114,9.114,0,0,1,4.345-1.023,9.326,9.326,0,0,1,3.806.748A7.323,7.323,0,0,1,41.25-12.8L38.478-10.3a4.56,4.56,0,0,0-3.63-1.8,4.48,4.48,0,0,0-2.233.55A3.817,3.817,0,0,0,31.1-10a4.773,4.773,0,0,0-.539,2.3A4.773,4.773,0,0,0,31.1-5.4,3.817,3.817,0,0,0,32.615-3.85a4.48,4.48,0,0,0,2.233.55,4.56,4.56,0,0,0,3.63-1.8L41.25-2.6A7.323,7.323,0,0,1,38.434-.44,9.326,9.326,0,0,1,34.628.308ZM45.1.2a2.462,2.462,0,0,1-1.782-.7,2.377,2.377,0,0,1-.726-1.782,2.35,2.35,0,0,1,.715-1.782A2.5,2.5,0,0,1,45.1-4.752a2.485,2.485,0,0,1,1.8.682,2.369,2.369,0,0,1,.7,1.782,2.4,2.4,0,0,1-.715,1.782A2.452,2.452,0,0,1,45.1.2Z"
                  transform="translate(271.392 55.205)"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
        </h1>
        <button class="burger-btn">
          <span class="burger-btn__bars">
            <span class="burger-btn__bar burger-btn__bar--top"></span>
            <span class="burger-btn__bar burger-btn__bar--middle"></span>
            <span class="burger-btn__bar burger-btn__bar--bottom"></span>
          </span>
          <p class="burger-btn__menu">menu</p>
        </button>
        <nav class="burger-menu">
          <ul class="burger-menu__list">
            <li class="burger-menu__item">
              <a href="./">
                <img src="./images/グループ 8.png" alt="シンボル" />
              </a>
            </li>
            <li class="burger-menu__item">
              <a href="./about.html">About us</a>
            </li>
            <li class="burger-menu__item">
              <a href="#!">Works</a>
            </li>
            <li class="burger-menu__item">
              <a href="#!">Culuture</a>
            </li>
            <li class="burger-menu__item">
              <a href="#!">Topics</a>
            </li>
            <li class="burger-menu__item">
              <a href="./contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <span class="burger-bg"></span>
      </header>
      <main>
        <div class="fv">
          <div class="fv__img">
            <div class="fv__inner">
              <p class="fv__text">
                デザインで人を笑顔にする社会
                <br />
                DIGSMILE INC.
              </p>
              <h2 class="fv__title">
                Design
                <br />
                for
                <br />
                smile.
              </h2>
            </div>
          </div>
        </div>
        <section class="about">
          <div class="about__inner about-bg">
            <div class="about-box">
              <h2 class="about__title">About us</h2>
              <p class="about__text">
                DIGSMILEは、デザインで人を笑顔にする会社。
                <br />
                なんでもない日常に少しのワクワクと遊び心を提供します。笑顔には世界を変える力
                がある、デザインには人を幸せにする力がある。毎日に幸せを感じて生きていきたい。
                <br />
                DIGSMILEの社名にはそんな想いが込められています。
              </p>
              <a href="./about.html" class="about__btn">
                read more
              </a>
            </div>
          </div>
        </section>
        <div class="section__wrapper">
          <div class="section__inner">
            <div class="section__items">
              <section class="section__item">
                <h2 class="section__title">Works</h2>
                <figure class="section__img-wrapper">
                  <img
                    class="section__img"
                    src="./images/daria-shevtsova-k_RYBedEvDw-unsplash@2x-min.png"
                    alt=""
                  />
                </figure>
                <p class="section__text">DIGSMILEの制作実績を紹介します。</p>
                <a href="#!" class="section__btn">
                  read more
                </a>
              </section>
              <section class="section__item">
                <h2 class="section__title">Culuture</h2>
                <figure class="section__img-wrapper">
                  <img
                    class="section__img"
                    src="./images/culture-img@2x-min.png"
                    alt=""
                  />
                </figure>
                <p class="section__text">
                  DIGSMILEの社内文化について紹介します。
                </p>
                <a href="#!" class="section__btn">
                  read more
                </a>
              </section>
            </div>
          </div>
        </div>
        <section class="topics">
          <div class="topics__inner">
            <h2 class="topics__title">Latest Topics</h2>
            <ul class="topics-post">
              <li class="topics-post__item">
                <time class="topics-post__date" datetime="2020-02-01">
                  2020.02.01
                </time>
                <a href="#!" class="topics-post__title">
                  イベントレポート「VRクリエイター座談会 〜5Gの次に来るもの〜」
                </a>
              </li>
              <li class="topics-post__item">
                <time class="topics-post__date" datetime="2020-01-18">
                  2020.01.18
                </time>
                <a href="#!" class="topics-post__title">
                  プレスリリースのお知らせ DIGGIN’ RECORDS
                </a>
              </li>
              <li class="topics-post__item">
                <time class="topics-post__date" datetime="2020-01-01">
                  2020.01.01
                </time>
                <a href="#!" class="topics-post__title">
                  新年明けましておめでとうございます
                </a>
              </li>
            </ul>
            <a href="#!" class="topics__btn">
              read more
            </a>
          </div>
        </section>
        <section class="contact">
          <div class="contact__inner">
            <div class="contact__items">
              <div class="contact__content">
                <h2 class="contact__title">Contact</h2>
                <p class="contact__text">
                  制作の依頼、取材の依頼、IRや採用についての連絡・お問い合わせは
                  コンタクトページから承っております。
                  <br />
                  まずはお気軽にご連絡ください。担当者から改めて返信いたします。
                </p>
                <a href="./contact.html" class="contact__btn">
                  read more
                </a>
              </div>
              <div class="contact__img-wrapper">
                <img
                  class="contact__img"
                  src="./images/recruit-img@2x-min.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <small>©2018 DIGSMILE INC.</small>
      </footer>
    </div>
  );
}
