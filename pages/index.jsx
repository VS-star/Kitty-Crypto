import LatestMarketplaceItems from "src/components/LatestMarketplaceItems"
import LatestStoreItems from "src/components/LatestStoreItems"
import PageTitle from "src/components/PageTitle"
import useApiListings from "src/hooks/useApiListings"

export default function Home() {
  const {listings} = useApiListings()
  return (
    <div>
    222333
      <PageTitle>Store</PageTitle>
      <main>
      asdfasdfsd
        {listings?.length > 0 && (
          <div className="divide-y divide-solid">
            <LatestStoreItems items={listings} />
            <LatestMarketplaceItems items={listings} />
          </div>
        )}
      </main>
    </div>
  )
}
