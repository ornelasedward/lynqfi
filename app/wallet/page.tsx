import TokenPortfolio from "@/components/portfolio/TokenPortfolio"

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <TokenPortfolio />
    </div>
  )
}
