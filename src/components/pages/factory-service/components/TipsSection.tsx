export function TipsSection() {
  return (
    <section className="bg-white py-20">
      <div className="fs-container max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-factory-teal">
            工場整理成功のポイント
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg bg-factory-sky50">
            <h3 className="text-xl font-bold mb-4 text-factory-teal">
              早めの相談が成功の鍵
            </h3>
            <ul className="space-y-2">
              <li>• 計画的な撤去でコスト削減</li>
              <li>• 機械の価値が下がる前に買取</li>
              <li>• 余裕を持ったスケジュール調整</li>
            </ul>
          </div>
          <div className="p-8 rounded-lg bg-factory-sky50">
            <h3 className="text-xl font-bold mb-4 text-factory-teal">
              信頼できるパートナー選び
            </h3>
            <ul className="space-y-2">
              <li>• 実績と経験の確認</li>
              <li>• 許可・資格の保有</li>
              <li>• 一括対応能力</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
