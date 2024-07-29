import config from '../../../config/config.json';
import { ProductCard } from '../../components/ProductCard';
import { ProductCardLoadingSkeleton } from '../../components/ProductCard/LoadingSkeleton';
import { useFetchWithPagination } from '../../hooks/useFetchWithPagination';
import { Pagination } from 'flowbite-react';
import { useQueryParams } from '../../hooks/useQueryParams';

function Products() {
  const { setQueryParam, getQueryParamByKey } = useQueryParams();
  const initialPageSize =
    getQueryParamByKey('pageSize') != ''
      ? parseInt(getQueryParamByKey('pageSize'))
      : 6;
  const initialPageNumber =
    getQueryParamByKey('page') != '' ? parseInt(getQueryParamByKey('page')) : 1;

  const {
    data: items,
    loading: isPageLoading,
    error,
    totalPages,
    pageNumber,
    setPageNumber,
    pageSize,
  } = useFetchWithPagination(
    config.baseUrl + config.productsPath + '?page=' + '&pageSize=',
    true,
    [],
    initialPageNumber,
    initialPageSize
  );

  const onPageChange = (pageNumber) => {
    if (pageNumber != initialPageNumber) {
      setQueryParam('page', pageNumber);

      setPageNumber(pageNumber);
    }
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
                return <ProductCard key={item.name} product={item} />;
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
