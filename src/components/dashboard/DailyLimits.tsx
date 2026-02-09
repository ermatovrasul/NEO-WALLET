export const DailyLimits = () => {
  const limits = [
    { label: 'Пополнение', value: '10000.00 USDT' },
    { label: 'Покупка', value: '2500.00 USDT' },
    { label: 'Продажа', value: '10000.00 USDT' },
    { label: 'Вывод', value: '2500.00 USDT' },
  ];

  return (
    <div className="bg-[#151515] border border-white/[0.05] rounded-[24px] p-5">
      <h4 className="text-white text-sm font-bold mb-4">Лимиты за текущий день</h4>
      <div className="space-y-4">
        {limits.map((item) => (
          <div key={item.label} className="border-l-2 border-[#E50914] pl-3">
            <p className="text-[#4C4C4C] text-[11px] font-bold uppercase tracking-wider">{item.label}</p>
            <p className="text-white text-sm font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};