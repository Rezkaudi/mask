export const ContactSection = () => {
  return (
    <section className="bg-gradient-to-br from-factory-sky to-factory-teal text-white py-20">
      <div className="fs-container max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
        <h3 className="text-2xl mb-8 text-factory-yellow">
          まずは無料相談から
        </h3>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-4">
            「工場を閉鎖することになったが、どうすればいいか分からない」
            <br />
            「概算でいいので、費用を知りたい」
            <br />
            「買取可能な設備があるか確認したい」
          </p>
          <p className="text-xl">
            どんなご相談でも結構です。経験豊富なスタッフが丁寧にお答えいたします。
          </p>
        </div>
      </div>
    </section>
  );
};
