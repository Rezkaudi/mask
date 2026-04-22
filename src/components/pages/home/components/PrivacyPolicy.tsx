import Swal from "sweetalert2";
import styles from "./PrivacyPolicy.module.css";

const showPrivacyPolicy = () => {
  Swal.fire({
    title: "プライバシーポリシー<br />（個人情報保護方針）",
    html: `
      <div class="${styles.privacyModalContent}">
        <p><strong>1. 事業者情報</strong>
          法人名：有限会社ハディズ・インターナショナル<br />
          住所：埼玉県狭山市笹井1丁目33-5<br />
          代表者：シャリフ マラウイ
        </p>

        <p><strong>2. 取得する個人情報</strong>
        お問い合わせフォーム・コメントの送信時に、氏名・電話番号・メールアドレスを取得させていただきます。また、買取させていただく際には身分証明書のご提示をお願いしております。
        </p>

        <div><strong>3. 個人情報の利用目的</strong>
          <ul>
          <li>ユーザーからのコメントやお問い合わせに回答するため</li>
          <li>利用規約に違反したユーザーの特定、その他不正不当な目的でサービスを利用したユーザーの特定をし、ご利用をお断りするため</li>
          </ul>  
        </div>

        <p><strong>4. 個人情報を安全に管理するための措置</strong>
        ユーザーから収集した個人情報は、不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため適切な対策を講じます。
        </p>

        <div><strong>5. 個人情報の第三者提供についてについて</strong>
        <p>当社は以下の場合を除き、ユーザーの同意を得ないまま第三者に個人情報を提供することは致しません。</p>
        <ul>
        <li>法令に基づく場合</li>
        <li>人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
        <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
        </ul>
        </div>

        <p><strong>6. 個人情報の開示、訂正、削除</strong>
          ご本人から個人情報の開示・訂正・削除を求められたときには、速やかに対応いたします。
        </p>

        <p><strong>7. 目的外の利用の禁止</strong>
          お問い合わせフォームを利用した営業の一切を禁止いたします。
        </p>
      </div>
      <button id="close-modal" class="close-button">✕</button>
    `,
    position: "center",
    backdrop: "swal2-noanimation",
    showConfirmButton: false,
    width: "95%",
    customClass: {
      popup: styles.privacyModal,
      title: styles.privacyTitle, 
    },
    didOpen: () => {
      const modalContent = document.querySelector(`.${styles.privacyModal}`);
      if (modalContent) {
        modalContent.scrollTo(0, 0);
        modalContent.addEventListener(
          "touchstart",
          (e) => e.stopPropagation(),
          { passive: true }
        );
      }
      const closeButton = document.getElementById("close-modal");
      if (closeButton) {
        closeButton.addEventListener("click", () => {
          Swal.close();
        });
      }
    },
  });
};

interface IPrivacyPolicyProps {
  setAgreePrivacy: (value: boolean) => void;
  agreePrivacy: boolean;
}

const PrivacyPolicy = ({
  setAgreePrivacy,
  agreePrivacy,
}: IPrivacyPolicyProps) => {
  return (
    <div className="flex items-center justify-center gap-2 p-2 sm:p-4">
      <input
        type="checkbox"
        checked={agreePrivacy}
        className="w-4 h-4 sm:w-5 sm:h-5 accent-red-500 cursor-pointer"
        onChange={(e) => setAgreePrivacy(e.target.checked)}
      />
      <p className="leading-5 text-xs sm:text-sm md:text-base text-gray-700">
        <span
          className="underline cursor-pointer text-blue-600 hover:text-blue-800"
          onClick={showPrivacyPolicy}
        >
          プライバシーポリシー
        </span>
        に同意する
      </p>
    </div>
  );
};

export default PrivacyPolicy;