import { TFormData, Product } from "@/types/formData.type";

// interfaces
import { EmailTemplate } from "./EmailTemplate";

export class ClientEmailTemplate extends EmailTemplate {
    private readonly data: TFormData;

    constructor(data: TFormData) {
        super();
        this.data = data;
    }

    generateHtml() {
        return `
              <h2>${this.data.name}様</h2>
              <p>お問い合わせいただきましてありがとうございます。<br /> ハディズです。</p>

              <p>このメールはお問い合わせの受付をお知らせする自動返信メールです。<br />
              お問い合わせいただいた内容につきましては、担当者よりご連絡いたします。<br />
              何かございましたら、お電話でのお問合わせも受け付けております。<br />
              なお、本メールへの返信は受け付けておりませんのでご了承ください。</p>

              <p><strong>お問い合わせ内容:</strong></p>
              
              <ul>
                ${this.addField("お名前", this.data.name, true)}
                ${this.addField("メールアドレス", this.data.email, true)}
                ${this.addField("電話番号", this.data.phone, true)}
                ${this.addField("都道府県", this.data.city, true)}
                ${this.addField("市区町村", this.data.product_info, true)}
                ${this.data.productsList.map((product: Product, index: number) =>
            `
                   <li><strong>商品 ${index + 1} の詳細:</strong> ${product.product_details}</li>
                   <li><strong>商品の状態:</strong> ${product.product_condition}</li>
                  `).join("")}
              </ul>
              <p>よろしくお願いいたします。<br /> <br />
              ◇ ◆<strong>　機械工具 高価買取　</strong>◆ ◇<br />
              <strong>有限会社　ハディズ・インターナショナル</strong><br />
              <strong>〒350-1327 埼玉県狭山市笹井1-33-5</strong><br />
              <strong>TEL：</strong>0120-842-881　04-2955-5276<br />
              <strong>FAX：</strong>04-2954-7136<br />
              <a href="https://mac-hadis.com/"><strong>https://mac-hadis.com/</strong></a><br />
              </p>
              `;
    }

    getAttachments() {
        return [];
    }
}
