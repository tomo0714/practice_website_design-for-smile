import { FirstView } from "src/components/FirstVew";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <FirstView id="Index" />
        <section className="about">
          <div className="about__inner about-bg">
            <div className="about-box">
              <h2 className="about__title">About us</h2>
              <p className="about__text">
                DIGSMILEは、デザインで人を笑顔にする会社。
                <br />
                なんでもない日常に少しのワクワクと遊び心を提供します。笑顔には世界を変える力
                がある、デザインには人を幸せにする力がある。毎日に幸せを感じて生きていきたい。
                <br />
                DIGSMILEの社名にはそんな想いが込められています。
              </p>
              <a href="src/about.html" className="about__btn">
                read more
              </a>
            </div>
          </div>
        </section>
        <div className="section__wrapper">
          <div className="section__inner">
            <div className="section__items">
              <section className="section__item">
                <h2 className="section__title">Works</h2>
                <figure className="section__img-wrapper">
                  <img
                    className="section__img"
                    src="src/images/daria-shevtsova-k_RYBedEvDw-unsplash@2x-min.png"
                    alt=""
                  />
                </figure>
                <p className="section__text">
                  DIGSMILEの制作実績を紹介します。
                </p>
                <a href="#!" className="section__btn">
                  read more
                </a>
              </section>
              <section className="section__item">
                <h2 className="section__title">Culuture</h2>
                <figure className="section__img-wrapper">
                  <img
                    className="section__img"
                    src="src/images/culture-img@2x-min.png"
                    alt=""
                  />
                </figure>
                <p className="section__text">
                  DIGSMILEの社内文化について紹介します。
                </p>
                <a href="#!" className="section__btn">
                  read more
                </a>
              </section>
            </div>
          </div>
        </div>
        <section className="topics">
          <div className="topics__inner">
            <h2 className="topics__title">Latest Topics</h2>
            <ul className="topics-post">
              <li className="topics-post__item">
                <time className="topics-post__date" datetime="2020-02-01">
                  2020.02.01
                </time>
                <a href="#!" className="topics-post__title">
                  イベントレポート「VRクリエイター座談会 〜5Gの次に来るもの〜」
                </a>
              </li>
              <li className="topics-post__item">
                <time className="topics-post__date" datetime="2020-01-18">
                  2020.01.18
                </time>
                <a href="#!" className="topics-post__title">
                  プレスリリースのお知らせ DIGGIN’ RECORDS
                </a>
              </li>
              <li className="topics-post__item">
                <time className="topics-post__date" datetime="2020-01-01">
                  2020.01.01
                </time>
                <a href="#!" className="topics-post__title">
                  新年明けましておめでとうございます
                </a>
              </li>
            </ul>
            <a href="#!" className="topics__btn">
              read more
            </a>
          </div>
        </section>
        <section className="contact">
          <div className="contact__inner">
            <div className="contact__items">
              <div className="contact__content">
                <h2 className="contact__title">Contact</h2>
                <p className="contact__text">
                  制作の依頼、取材の依頼、IRや採用についての連絡・お問い合わせは
                  コンタクトページから承っております。
                  <br />
                  まずはお気軽にご連絡ください。担当者から改めて返信いたします。
                </p>
                <a href="src/contact.html" className="contact__btn">
                  read more
                </a>
              </div>
              <div className="contact__img-wrapper">
                <img
                  className="contact__img"
                  src="src/images/recruit-img@2x-min.png"
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
