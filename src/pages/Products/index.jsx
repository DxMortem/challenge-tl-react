import { useContext } from 'react';
import {
  products as productsConfig,
  queryPath,
} from '../../../config/config.json';
import { ProductCard } from '../../components/ProductCard';
import { ProductCardLoadingSkeleton } from '../../components/ProductCard/LoadingSkeleton';
import { useFetchWithPagination } from '../../hooks/useFetchWithPagination';
import { Pagination, Tooltip } from 'flowbite-react';
import { FaPlus } from 'react-icons/fa6';
import { AuthorizationContext } from '../../context/AuthorizationProvider';
import { SearchBar } from '../../components/SearchBar';
import { ModalContext } from '../../context/ModalProvider';
import { ProductForm } from '../../components/ProductForm';

function Products() {
  const { isAdmin } = useContext(AuthorizationContext);
  const { openModal, setOpenModal, setModalChildren, setOnClose } =
    useContext(ModalContext);
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

  const onNeedRechargeProducts = () => {
    getData();
  };

  const onChangeSearchBar = (event) => {
    setFilterValues({ productName: event.target.value });
  };

  const onClickSearchButton = () => {
    getData();
  };

  const onClose = ({ needReload }) => {
    setOpenModal(false);
    setModalChildren(null);
    if (needReload) {
      onNeedRechargeProducts();
    }
  };

  const handleOnClickCreateProduct = () => {
    setModalChildren(
      <div className="m-5">
        <ProductForm type="create" onClose={onClose} />
      </div>
    );
    setOpenModal(true);
    setOnClose(() => onClose);
  };

  return (
    <div className="flex flex-col w-full items-center ms-2 me-2">
      <SearchBar
        onChangeInput={onChangeSearchBar}
        onClickButton={onClickSearchButton}
      />
      <div
        className={`grid gap-4 sm:grid-cols-[repeat(3,minmax(0,300px))] auto-rows-[minmax(0,400px)] max-w-screen-lg ${isPageLoading ? '' : 'items-center'}`}
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
                    <ProductCard
                      product={item}
                      onNeedRechargeProducts={onNeedRechargeProducts}
                    />
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
          <div className="flex justify-end mb-5 mr-5">
            <Tooltip content="Create Product" trigger="hover">
              <button
                id="create-button"
                className="hover:text-lime-600 h-14 w-14 rounded-full bg-gray-50 text-black shadow-md shadow-black/50"
                onClick={handleOnClickCreateProduct}
              >
                <div className="flex justify-center">
                  <FaPlus />
                </div>
              </button>
            </Tooltip>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { Products };
