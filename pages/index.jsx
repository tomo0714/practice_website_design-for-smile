import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}
