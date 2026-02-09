export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  balance?: number;
  icon: string;
}
