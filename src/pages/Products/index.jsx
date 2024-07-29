import { products as productsConfig } from '../../../config/config.json';
import { ProductCard } from '../../components/ProductCard';
import { ProductCardLoadingSkeleton } from '../../components/ProductCard/LoadingSkeleton';
import { useFetchWithPagination } from '../../hooks/useFetchWithPagination';
import { Pagination } from 'flowbite-react';

function Products() {
  const {
    data: items,
    loading: isPageLoading,
    error,
    totalPages,
    pageNumber,
    setPageNumber,
    pageSize,
    getData,
    onPageChange,
  } = useFetchWithPagination(
    productsConfig.baseUrl +
      productsConfig.path +
      productsConfig.withPaginationQueryParams,
    true,
    []
  );

  const onDeleteHandle = () => {
    getData();
  };

  return (
    <div>
      <div className="grid gap-4 grid-cols-3 w-full max-w-screen-lg">
        {isPageLoading
          ? [...Array(pageSize)].map((e, i) => (
              <ProductCardLoadingSkeleton key={i} />
            ))
          : items.map((item) => {
              if (!isPageLoading)
                return (
                  <ProductCard
                    key={item.name}
                    product={item}
                    onDelete={onDeleteHandle}
                  />
                );
            })}
      </div>
      <div className="w-full flex justify-center mt-5">
        <Pagination
          currentPage={pageNumber}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

export { Products };
