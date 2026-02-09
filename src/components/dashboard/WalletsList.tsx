import React from 'react';

const wallets = [
  { name: 'Bitcoin', symbol: 'BTC', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Solana', symbol: 'SOL', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Bitcoin', symbol: 'BTC', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Solana', symbol: 'SOL', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Bitcoin', symbol: 'BTC', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Solana', symbol: 'SOL', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
];

export const WalletsList = () => {
  return (
    <div className="p-4 md:p-8">
      <h3 className="text-white text-lg font-bold mb-6">Ваши кошельки</h3>
      
      <div className="space-y-2">
        {wallets.map((wallet, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-white/[0.03] last:border-0 group hover:bg-white/[0.02] transition-colors px-3 rounded-2xl gap-4 sm:gap-0"
          >
            <div className="flex items-center gap-4 min-w-[180px]">
              <div className="w-10 h-10 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center overflow-hidden border border-white/5">
                <img src={wallet.icon} alt={wallet.name} className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h4 className="text-white text-[15px] font-bold">{wallet.name}</h4>
                <p className="text-[#4C4C4C] text-[12px] font-bold uppercase">{wallet.symbol}</p>
              </div>
            </div>
            <div className="flex sm:flex-col items-center sm:items-start justify-between sm:justify-center flex-1 sm:ml-4">
              <span className="text-[#4C4C4C] text-[12px] font-bold sm:hidden uppercase">Баланс:</span>
              <div className="text-right sm:text-left">
                <div className="text-white text-[15px] font-bold">{wallet.balance}</div>
                <div className="text-[#E50914] text-[12px] font-bold">{wallet.usd}</div>
              </div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#00C076] text-[13px] font-bold hover:bg-[#00C076]/10 transition-all">
                Ввод
              </button>
              <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#4C4C4C] text-[13px] font-bold hover:bg-white/10 hover:text-white transition-all">
                Вывод
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};