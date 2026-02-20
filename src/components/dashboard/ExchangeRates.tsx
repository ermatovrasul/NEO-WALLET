export const ExchangeRates = () => {
  return (
    <div className="bg-[#151515] border border-white/[0.05] rounded-[24px] p-8">
      <h4 className="text-white text-sm font-bold mb-4">Курс обмена</h4>
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-[#4C4C4C] font-bold border-b border-white/[0.03]">
            <td className="pb-2 text-left">Валюта</td>
            <td className="pb-2 text-center">Покупка</td>
            <td className="pb-2 text-right">Продажа</td>
          </tr>
        </thead>
        <tbody className="text-[#A3A3A3] font-medium">
          <tr>
            <td className="py-3 text-white">USDT/KGS</td>
            <td className="py-3 text-center">87.80</td>
            <td className="py-3 text-right">88.40</td>
          </tr>
          <tr>
            <td className="py-3 text-white">USDT/USD</td>
            <td className="py-3 text-center">1.00</td>
            <td className="py-3 text-right">1.02</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};