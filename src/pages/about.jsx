import { FirstView } from "src/components/FirstVew";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

export default function About() {
  return (
    <div>
      <Header />
      <main>
        <FirstView id="About" />
        <section className="vision">
          <div className="vision__inner">
            <h2 className="vision__title">VISION</h2>
            <h3 className="vision__subtitle">デザインで人を笑顔にする会社</h3>
            <p className="vision__text">私達のデザインで人が笑顔になる。</p>
            <p className="vision__text">そんなデザインを目指しています。</p>
            <p className="vision__text">
              私達が考える人を笑顔にできるデザインとは、
              <br />
              デザインが課題を適切に解決ができているかどうか。
              <br />
            </p>
            <p className="vision__text">
              ビジュアルだけではなく、
              <br />
              本当に求められているものは何かを考え抜いて、
              <br />
              デザインしていきたい。
            </p>
            <p className="vision__text">
              誰かの幸せを創ることも、
              <br />
              世界の常識を変えていくことだってできる。
            </p>
            <p className="vision__text">私達はデザインの力を信じています。</p>
          </div>
        </section>
        <section className="message">
          <div className="message__inner">
            <div className="message-box">
              <div className="message-box__inner">
                <h2 className="message-box__title">CEO MESSAGE</h2>
                <p className="message-box__text">
                  良いデザインは人を幸せにする。
                </p>
                <p className="message-box__text">私達はそう信じています。</p>
                <p className="message-box__text">
                  デザインを通して、ビジネスの課題とユーザーの課題を解決することで、世の中を幸せにしていきたい。
                </p>
                <p className="message-box__text">
                  現在はあらゆるプロダクトがデジタル化されており、デザイナーに対する需要はますます高まっています。それとともに、期待される役割も幅広くなりつつあります。
                </p>
                <p className="message-box__text">
                  クリエイティブで社会の可能性を切り開いていく。
                </p>
                <p className="message-box__text">
                  変化の激しい現代、私達はデザインの力で社会を良い方向に変革していく企業を目指していきます。
                </p>
              </div>
              <figure className="message__img-wrapper">
                <img
                  className="message__img"
                  src="src/images/ceo-img.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </section>
        <section className="company">
          <div className="company__inner">
            <h2 className="company__title">Company</h2>
            <table className="company-table">
              <tbody className="company-table__inner">
                <tr className="company-table__row">
                  <th className="company-table__title">社名</th>
                  <td className="company-table__text">株式会社DIGSMILE</td>
                </tr>
                <tr className="company-table__row">
                  <th className="company-table__title">代表取締役</th>
                  <td className="company-table__text">〇〇〇〇</td>
                </tr>
                <tr className="company-table__row">
                  <th className="company-table__title">設立</th>
                  <td className="company-table__text">2021年1月1日</td>
                </tr>
                <tr className="company-table__row">
                  <th className="company-table__title">資本金</th>
                  <td className="company-table__text">1億円</td>
                </tr>
                <tr className="company-table__row">
                  <th className="company-table__title">所在地</th>
                  <td className="company-table__text">
                    東京都品川区〇〇〇〇〇〇
                  </td>
                </tr>
                <tr className="company-table__row">
                  <th className="company-table__title">電話番号</th>
                  <td className="company-table__text">00-0000-0000</td>
                </tr>
              </tbody>
            </table>
            <div className="company__map">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51897.385325629!2d139.6996617879943!3d35.6132632124338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188a622d707eed%3A0x7d44bb1b33343845!2z5p2x5Lqs6YO95ZOB5bed5Yy6!5e0!3m2!1sja!2sjp!4v1615194066421!5m2!1sja!2sjp"
                width="1100"
                height="360"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
