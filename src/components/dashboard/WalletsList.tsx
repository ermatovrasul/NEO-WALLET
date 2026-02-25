import React from 'react';
import Link from 'next/link';

const wallets = [
  { name: 'Bitcoin', symbol: 'BTC', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Bitcoin', symbol: 'BTC', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Solana', symbol: 'SOL', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { name: 'Solana', symbol: 'SOL', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { name: 'Tether', symbol: 'USDT', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
  { name: 'Tether', symbol: 'USDT', balance: '0.000000', usd: '$0.00', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
];

export const WalletsList = () => {
  return (
    <div className="p-4 md:p-1">
      <h3 className="text-white text-lg font-bold mb-3 ">Ваши кошельки</h3>
      <div className="space-y-2">
        {wallets.map((wallet, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/[0.03] last:border-0 group hover:bg-white/[0.02] transition-colors px-1 rounded-2xl gap-6">
            <div className="flex items-center gap-4 min-w-[180px]">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 overflow-hidden">
                <img src={wallet.icon} alt={wallet.name} className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h4 className="text-white text-[15px] font-bold">{wallet.name}</h4>
                <p className="text-[#4C4C4C] text-[12px] font-bold uppercase">{wallet.symbol}</p>
              </div>
            </div>
            <div className="flex items-center justify-between flex-row sm:flex-col gap-2">
              <p className="text-white text-[15px] font-bold">{wallet.balance}</p>
              <p className="text-[#A21427] text-[15px] font-bold">{wallet.usd}</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Link href={`/dashboard/deposit?method=${wallet.symbol.toLowerCase()}`} className="flex-1 sm:flex-none">
                <button className="w-full px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#00C076] text-[13px] font-bold hover:bg-[#00C076]/10 transition-all">
                  Ввод
                </button>
              </Link>
              <Link href={`/dashboard/withdraw?method=${wallet.symbol.toLowerCase()}`} className="flex-1 sm:flex-none">
                <button className="w-full px-6 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-[#4C4C4C] text-[13px] font-bold hover:bg-white/10 hover:text-white transition-all">
                  Вывод
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};