import React from 'react';

const transactions = [
  { id: '1', date: '24.04.2025', type: 'Покупка', amount: -248.05, currency: '$', status: 'Потдверждено' },
  { id: '2', date: '20.03.2025', type: 'Продажа', amount: 45.00, currency: '$', status: 'Отклонено' },
  { id: '3', date: '01.03.2025', type: 'Вывод средств', amount: -100.00, currency: '$', status: 'В рассмотрении' },
  { id: '4', date: '12.03.2025', type: 'Продажа', amount: 45.00, currency: '$', status: 'Отклонено' },
];

const HistoryTable = () => {
  return (
    <div className="bg-[#121212] p-4 sm:p-5 rounded-[24px] text-white w-full ">
      <h2 className="text-xl font-bold mb-6">История транзакций</h2> 
      <div className="hidden md:block bg-[#0D0D0D] border border-white/5 rounded-2xl p-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-[13px] border-b border-gray-800/60">
              <th className="pb-4 ">Дата</th>
              <th className="pb-4 ">Тип операции</th>
              <th className="pb-4 ">Сумма</th>
              <th className="pb-4 text-center">Статус</th>
            </tr>
          </thead>
          <tbody className="text-[14px]">
            {transactions.map((item, index) => (
              <tr key={index} className="border-b border-gray-800/40 hover:bg-white/[0.02] transition-colors">
                <td className="py-5 text-gray-400">{item.date}</td>
                <td className="py-5 text-gray-200">{item.type}</td>
                <td className={`py-5 font-bold ${item.amount < 0 ? 'text-[#FF4D4D]' : 'text-[#4ade80]'}`}>
                  {item.amount > 0 ? `+${item.amount.toFixed(2)}` : item.amount.toFixed(2)}{item.currency}
                </td>
                <td className="py-5  text-center">
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col">
        {transactions.map((item, index) => (
          <div key={index} className="py-5 border-b border-gray-800/40 flex flex-col gap-3">
            <div className="flex justify-between items-center w-full">
              <span className="text-gray-400 text-xs ">{item.date}</span>
              <StatusBadge status={item.status} />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-200 text-sm font-bold uppercase">{item.type}</span>
              <span className={`text-[15px] font-black ${item.amount < 0 ? 'text-[#FF4D4D]' : 'text-[#4ade80]'}`}>
                {item.amount > 0 ? `+${item.amount.toFixed(2)}` : item.amount.toFixed(2)}{item.currency}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const baseClasses = "py-1.5 px-3 rounded-xl text-[11px] font-bold inline-block text-center border min-w-[110px]";
  
  const styles: { [key: string]: string } = {
    'Потдверждено': 'bg-[#1b2c24] text-[#4ade80] border-[#2d4d3d]',
    'Отклонено': 'bg-[#2c1b1b] text-[#ff4d4d] border-[#4d2d2d]',
    'В рассмотрении': 'bg-[#2c241b] text-[#ffb34d] border-[#4d3d2d]'
  };

  const currentStyle = styles[status] || styles['В рассмотрении'];

  return (
    <span className={`${baseClasses} ${currentStyle}`}>
      {status}
    </span>
  );
};

export default HistoryTable;