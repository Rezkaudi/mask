import { Attachment } from "../interfaces/IMailTemplate";
import { TFormData, Product } from "@/types/formData.type";

// interfaces
import { EmailTemplate } from "./EmailTemplate";

export class SystemEmailTemplate extends EmailTemplate {
    private readonly data: TFormData;

    constructor(data: TFormData) {
        super();
        this.data = data;
    }

    generateHtml(): string {
        return `
        <h2>新しいお問い合わせが届きました</h2>
        ${this.addField("お名前", this.data.name)}
        ${this.addField("メールアドレス", this.data.email)}
        ${this.addField("電話番号", this.data.phone)}
        ${this.addField("電話の許可", this.data.phonePermission)}
        ${this.addField("使用状況", this.data.usageType)}
        ${this.addField("インボイス登録", this.data.invoiceRegistration)}
        ${this.addField("登録番号の提供", this.data.provideRegistrationNumber)}
        ${this.addField("都道府県", this.data.city)}
        ${this.addField("市区町村", this.data.product_info)}
        ${this.addField("追加のメモ", this.data.additional_notes)}
        ${this.data.productsList
                .map((product: Product, productIndex: number) =>
                    `
            <hr>
            <h3>商品 ${productIndex + 1}</h3>
            ${this.addField("商品の詳細", product.product_details)}
            ${this.addField("商品の状態", product.product_condition)}
            
            ${(product.images ?? []).length
                        ? product.images!
                            .filter((image: string | null): image is string => image !== null)
                            .map((_, imageIndex: number) =>
                                `
                <p><strong>添付ファイル ${imageIndex + 1}:</strong> product_${productIndex + 1}_attachment_${imageIndex + 1}.png</p>
                <img src="cid:attached-image-${productIndex}-${imageIndex}" alt="Attachment ${imageIndex + 1}" />
              `
                            )
                            .join("")
                        : "<p>添付ファイルはありません。</p>"
                    }`)
                .join("")}
      `;
    }

    getAttachments(): Attachment[] {
        return this.data.productsList.flatMap(
            (product: Product, productIndex: number) =>
                (product.images ?? [])
                    .filter((image: string | null): image is string => image !== null) // Remove null values
                    .map((image: string, imageIndex: number) => ({
                        filename: `product_${productIndex + 1}_attachment_${imageIndex + 1}.png`,
                        content: Buffer.from(image.split(",")[1], "base64"),
                        encoding: "base64",
                        cid: `attached-image-${productIndex}-${imageIndex}`,
                    }))
        );
    }
}

