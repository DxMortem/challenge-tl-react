import { useContext } from 'react';
import {
  products as productsConfig,
  queryPath,
} from '../../../config/config.json';
import { ProductCard } from '../../components/ProductCard';
import { ProductCardLoadingSkeleton } from '../../components/ProductCard/LoadingSkeleton';
import { useFetchWithPagination } from '../../hooks/useFetchWithPagination';
import { Pagination } from 'flowbite-react';
import { FaPlus } from 'react-icons/fa6';
import { AuthorizationContext } from '../../context/AuthorizationProvider';
import { SearchBar } from '../../components/SearchBar';

function Products() {
  const { isAdmin } = useContext(AuthorizationContext);
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
    setFilterValues,
  } = useFetchWithPagination(
    productsConfig.baseUrl +
      productsConfig.path +
      productsConfig.withPaginationQueryParams,
    [queryPath.withFilterName],
    true,
    []
  );

  const onDeleteHandle = () => {
    getData();
  };

  const onChangeSearchBar = (event) => {
    setFilterValues({ productName: event.target.value });
  };

  const onClickSearchButton = () => {
    getData();
  };

  return (
    <div className="flex flex-col w-full items-center">
      <SearchBar
        onChangeInput={onChangeSearchBar}
        onClickButton={onClickSearchButton}
      />
      <div
        className={`grid gap-4 grid-cols-[repeat(3,minmax(0,300px))] auto-rows-[minmax(0,400px)] max-w-screen-lg ${isPageLoading ? '' : 'items-center'}`}
      >
        {isPageLoading
          ? [...Array(pageSize)].map((e, i) => (
              <div key={i} className="w-full flex flex-col items-center">
                <ProductCardLoadingSkeleton />
              </div>
            ))
          : items.map((item) => {
              if (!isPageLoading)
                return (
                  <div
                    key={item.name}
                    className="w-full h-full flex flex-col items-center"
                  >
                    <ProductCard product={item} onDelete={onDeleteHandle} />
                  </div>
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
      {isAdmin ? (
        <div className="sticky bottom-0 right-0 w-full text-right">
          <button className="hover:text-lime-600 mb-10 mr-10 h-14 w-14 rounded-full bg-gray-50 text-black shadow-md shadow-black/50">
            <div className="flex justify-center">
              <FaPlus />
            </div>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export { Products };
