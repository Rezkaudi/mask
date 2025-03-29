"use client";

import Image from "next/image";
import PrivacyPolicy from "@/components/pages/home/components/PrivacyPolicy";
import { useFormHandler } from "@/hooks/useFormHandler";

// import fields
import RadioGroup from "../../pages/home/components/RadioGroup";
import InputField from "../../pages/home/components/InputField";
import SelectField from "../../pages/home/components/SelectField";
import ImageUpload from "../../pages/home/components/ImageUpload";

// import options
import usageOptions from "@/content/home/usageOptions";
import japanRegions from "@/content/home/japanRegions";
import conditionOptions from "@/content/home/conditionOptions";
import confirmationOptions from "@/content/home/confirmationOptions";

import { Product } from "@/types/formData.type";

const MAX_PRODUCTS = 3;

const AddProductButton = ({
  addProduct,
  productsList,
}: {
  addProduct: () => void;
  productsList: Product[];
}) =>
  productsList.length < MAX_PRODUCTS && (
    <button type="button" onClick={addProduct}>
      ＋商品追加
    </button>
  );

const Inquiry = () => {
  const {
    formData,
    isSubmitting,
    handleInputChange,
    handleImageChange,
    handleSubmit,
    addProduct,
    deleteProduct,
    handleProductInputChange,
    agreePrivacy,
    setAgreePrivacy,
    click,
    setClick,
  } = useFormHandler();

  const isDisabled = isSubmitting || !agreePrivacy;

  return (
    <section
      id="inquiry"
      className="py-[50px] lg:py-[60px] px-[20px] lg:px-0 bg-[url(/images/home-page/dot-bg-results.svg)] bg-auto font-noto"
    >
      <div>
        <h2 className="text-[30px] md:text-[40px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center">
          お問い合わせ
        </h2>
        <p className="mb-10 md:mb-12 lg:mb-14 mt-2 lg:mt-5 text-center text-xs lg:text-sm font-medium text-gray-700">
          <span className="text-red-600 pr-1 text-lg">*</span>
          営業目的での利用はお断りします
        </p>
      </div>

      <form
        className="space-y-6 max-w-[900px] md:mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Input Fields */}
        <InputField
          id="name"
          name="name"
          label="お名前"
          placeholder="未入力"
          value={formData.name}
          required
          onChange={handleInputChange}
        />
        <InputField
          id="email"
          name="email"
          label="メールアドレス"
          placeholder="未入力"
          value={formData.email}
          required
          onChange={handleInputChange}
        />
        <InputField
          id="phone"
          name="phone"
          label="電話番号"
          placeholder="半角ハイフンなし"
          value={formData.phone}
          required
          onChange={handleInputChange}
        />

        {/* Radio Groups */}
        <RadioGroup
          name="phonePermission"
          inlineLabels
          question="質問がある場合、こちらからお電話してもよろしいでしょうか？"
          required
          value={formData.phonePermission}
          onChange={handleInputChange}
          click={click}
          setClick={setClick}
          options={confirmationOptions}
        />
        <RadioGroup
          name="usageType"
          question="使用状況"
          inlineLabels={false}
          required
          value={formData.usageType}
          click={click}
          setClick={setClick}
          options={usageOptions}
          onChange={handleInputChange}
        />
        <RadioGroup
          name="invoiceRegistration"
          inlineLabels
          required={false}
          question="事業で使用していた場合、インボイスの登録はしていますか？"
          value={formData.invoiceRegistration}
          onChange={handleInputChange}
          click={click}
          setClick={setClick}
          options={confirmationOptions}
        />
        <RadioGroup
          name="provideRegistrationNumber"
          inlineLabels
          required={false}
          question="買取が成立しましたら、登録番号をご提供いただけますでしょうか？"
          value={formData.provideRegistrationNumber}
          onChange={handleInputChange}
          click={click}
          setClick={setClick}
          options={confirmationOptions}
        />

        {/* Select Fields */}
        <SelectField
          id="city"
          name="city"
          label="都道府県"
          required
          value={formData.city}
          options={japanRegions}
          onChange={handleInputChange}
        />
        <InputField
          id="productInfo"
          name="product_info"
          label="市区町村"
          placeholder="未入力"
          required={false}
          value={formData.product_info}
          onChange={handleInputChange}
        />

        {/* Products List */}
        {formData.productsList.map((product, index) => (
          <div key={index} className="bg-[#fcf7f7] px-1 py-2 border">
            {index !== 0 && (
              <button
                type="button"
                onClick={() => deleteProduct(index)}
                className="w-[24px] h-[24px] ml-auto border border-[#DCDCDC] bg-white rounded-full flex items-center justify-center"
                aria-label="Delete Product"
              >
                <Image
                  src="/images/icons/trash.svg"
                  alt="Delete"
                  width={11}
                  height={11}
                  loading="lazy"
                />
              </button>
            )}

            <InputField
              id={`productDetails-${index}`}
              name="product_details"
              label="査定希望商品のメーカー名、型番"
              placeholder="(例:リョービ電ノコ(ASK-1000)動作)"
              required
              value={product.product_details}
              onChange={(e) => handleProductInputChange(e, index)}
            />

            <SelectField
              id={`productCondition-${index}`}
              name="product_condition"
              label="状態を選択してください"
              required
              value={product.product_condition}
              onChange={(e) => handleProductInputChange(e, index)}
              options={conditionOptions}
            />

            <ImageUpload
              label="買取商品の写真があればこちらに添付してください。"
              setImages={handleImageChange}
              images={product.images ?? new Array(3).fill(null)}
              productIndex={index}
            />
          </div>
        ))}

        {/* Add Product Button */}
        <AddProductButton
          addProduct={addProduct}
          productsList={formData.productsList}
        />

        {/* Textarea */}
        <textarea
          id="additionalNotes"
          name="additional_notes"
          placeholder="ご質問やご連絡事項はこちらにお願いします"
          value={formData.additional_notes}
          className="py-[9px] px-[16px] w-full h-[100px] border-[1px] border-[#D1D5DB] rounded-md text-[14px] leading-[23px] font-normal"
          onChange={handleInputChange}
        />

        {/* Privacy Policy */}
        <PrivacyPolicy
          setAgreePrivacy={setAgreePrivacy}
          agreePrivacy={agreePrivacy}
        />

        {/* Submit Button */}
        <button
          disabled={isDisabled}
          type="submit"
          className={`w-[90%] lg:w-[60%] py-[12px] mx-auto text-[24px] leading-[36px] text-center text-white font-black rounded flex items-start justify-center gap-x-4 gradient-red ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={() => setClick(true)}
        >
          {isSubmitting ? (
            "送信..."
          ) : (
            <>
              送信する
              <Image
                src="/images/icons/arrow-right-red.svg"
                alt="arrow-right-red"
                width={32}
                height={32}
                loading="lazy"
              />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Inquiry;
