import { FirstView } from "src/components/FirstVew";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";

function Contact() {
  return (
    <div>
      <Header />
      <main>
        <FirstView id="Contact" />
        <form className="form">
          <div className="form__inner">
            <p className="form__text">
              ご依頼やご相談についてのご質問やご要望がございましたら、下記フォームよりお気軽にお問い合わせください。送付いただいた内容を確認の上、担当者からご連絡させていただきます。
            </p>
            <div className="form__header">
              <p className="form__title">お問い合わせ識別</p>
              <div className="form__mandatory">必須</div>
            </div>
            <ul className="radio">
              <li className="radio__item">
                <input
                  type="radio"
                  className="radio__btn"
                  name="radio__btn"
                  id="request"
                  checked
                />
                <label for="request">製作依頼</label>
              </li>
              <li className="radio__item">
                <input
                  type="radio"
                  className="radio__btn"
                  name="radio__btn"
                  id="recruit"
                />
                <label for="recruit">採用</label>
              </li>
              <li className="radio__item">
                <input
                  type="radio"
                  className="radio__btn"
                  name="radio__btn"
                  id="ir"
                />
                <label for="ir">IR</label>
              </li>
              <li className="radio__item">
                <input
                  type="radio"
                  className="radio__btn"
                  name="radio__btn"
                  id="other"
                />
                <label for="other">その他</label>
              </li>
            </ul>
            <p className="form__title">会社名・団体名</p>
            <input type="text" name="campany-name" />
            <div className="form__header">
              <p className="form__title">お名前</p>
              <div className="form__mandatory">必須</div>
            </div>
            <input type="text" name="name" />
            <div className="form__header">
              <p className="form__title">メールアドレス</p>
              <div className="form__mandatory">必須</div>
            </div>
            <input name="emain" type="email" />
            <p className="form__title">電話番号</p>
            <input name="tel" type="tel" />
            <div className="form__header">
              <p className="form__title">お問い合わせ内容</p>
              <div className="form__mandatory">必須</div>
            </div>
            <textarea name="contact"></textarea>
            <h3 className="privacy__title">Privacy Policy</h3>
            <div className="privacy">
              <p className="privacy__text">
                個人情報保護方針
                株式会社DIGSMILE（以下、当社）では、個人情報の重要性を認識し、以下の基準に従って、適切な管理、保護に努めます。
              </p>
              <p className="privacy__text">
                1.個人情報の収集、利用
                当社では、お客様との取引、サービスの提供のために個人情報を適法に収集し、収集した目的の範囲内で、個人情報を利用いたします。
              </p>
              <p className="privacy__text">
                2.個人情報の第三者への開示と提供
                収集したお客様の個人情報は、法的な要請等によらない限り、お客様の承諾を得ない第三者に対して提供・開示はいたしません。
                業務の都合上、業務委託先に個人情報を提供する場合は、機密保持契約等によって業務委託先に個人情報保護を義務付けるとともに、業務委託先が適切に個人情報を取り扱うように管理いたします。
              </p>
              <p className="privacy__text">
                3.個人情報の保護
                当社では、個人情報の紛失、破壊、改ざん、不正アクセス、および漏えい等を防止するため、適切な対策を行います。
              </p>
              <p className="privacy__text">
                4.法令および関連規範の遵守
                当社は、個人情報の取り扱いに関して、個人情報保護法をはじめとする個人情報に関する法令および関連する規範を遵守します。
              </p>
              <p className="privacy__text">
                5.個人情報の開示・訂正・削除
                当社では、個人情報の開示・訂正・削除等の依頼があった場合、情報提供者本人であることを確認の上、すみやかに対応いたします。
              </p>
              <p className="privacy__text">
                法令や当社方針により、プライバシー・ポリシーを予告なく改訂することがあります。
              </p>
              <p className="privacy__text">
                お問い合わせ窓口
                当社の個人情報の取扱いに関するお問い合わせは下記までご連絡お願いいたします。
                株式会社ファイアープレイス 044-589-4333
              </p>
            </div>
            <div className="checkbox__wrapper">
              <input name="checkbox" type="checkbox" />
              <p>個人情報の取り扱いについて同意の上送信します。</p>
            </div>
          </div>

          <input type="submit" value="送信" />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
