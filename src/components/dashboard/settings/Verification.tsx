export default function Verification() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-20 h-20 bg-green-500/10 border border-green-500 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold mb-2">Ваш аккаунт верифицирован</h2>
      <p className="text-gray-500 text-sm">Все функции кошелька доступны вам в полном объеме.</p>
    </div>
  )
}