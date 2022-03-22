import styles from "src/components/Form/Form.module.css";
import { Privacy } from "src/components/Privacy";
import { Radio } from "src/components/Radio";

const FORM_ITEMS = [
  { title: "お問い合わせ識別", content: <Radio /> },
  {
    title: "会社名・団体名",
    content: <input type="text" name="campany-name" />,
  },
  { title: "お名前", content: <input type="text" name="name" /> },
  { title: "メールアドレス", content: <input name="emain" type="email" /> },
  { title: "電話番号", content: <input name="tel" type="tel" /> },
  { title: "お問い合わせ内容", content: <textarea name="contact"></textarea> },
];

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inner}>
        <p className={styles.text}>
          ご依頼やご相談についてのご質問やご要望がございましたら、下記フォームよりお気軽にお問い合わせください。送付いただいた内容を確認の上、担当者からご連絡させていただきます。
        </p>
        {FORM_ITEMS.map((item) => {
          return (
            <>
              <p key={item.title} className={styles.title}>
                {item.title}
              </p>
              {item.content}
            </>
          );
        })}
        <Privacy />
        <div className={styles.checkbox}>
          <input name="checkbox" type="checkbox" />
          <p>個人情報の取り扱いについて同意の上送信します。</p>
        </div>
      </div>
      <input type="submit" value="送信" />
    </form>
  );
};
