import { useEffect, useState } from 'react';
import { useQueryParams } from '../useQueryParams';
import { products } from '../../../config/config.json';

const useFetchWithPagination = (
  url,
  urlFilters,
  urlNeedReeplace,
  initialRenderData,
  initialRenderPageNumber,
  initialRenderPageSize
) => {
  const { setQueryParam, getQueryParamByKey } = useQueryParams();
  const initialPageSize =
    getQueryParamByKey('pageSize') != ''
      ? parseInt(getQueryParamByKey('pageSize'))
      : 6;
  const initialPageNumber =
    getQueryParamByKey('page') != '' ? parseInt(getQueryParamByKey('page')) : 1;

  const [data, setData] = useState(initialRenderData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(
    initialRenderPageNumber ? initialRenderPageNumber : initialPageNumber
  );
  const [pageSize, setPageSize] = useState(
    initialRenderPageSize ? initialRenderPageSize : initialPageSize
  );
  const [filterValues, setFilterValues] = useState({});

  const getFilterName = (filter) => {
    return filter.replace('&', '').replace('=', '');
  };

  const getFiltersWithValues = (urlFilters, filterValues) => {
    return urlFilters
      .map((filter) => {
        let filterName = getFilterName(filter);
        return filterValues.hasOwnProperty(filterName)
          ? filter + filterValues[filterName]
          : null;
      })
      .join('');
  };

  const onPageChange = (pageNumber) => {
    if (pageNumber != initialPageNumber) {
      setQueryParam('page', pageNumber);
      setPageNumber(pageNumber);
    }
  };

  const getData = () => {
    setLoading(true);
    let urlToFetch = urlNeedReeplace
      ? url
          .replace('page=', 'page=' + (pageNumber - 1).toString())
          .replace('pageSize=', 'pageSize=' + pageSize.toString())
      : url;
    urlToFetch = urlToFetch + getFiltersWithValues(urlFilters, filterValues);
    fetch(urlToFetch)
      .then((res) => res.json())
      .then((res) => {
        setData(res.content);
        setTotalPages(res.page.totalPages);
      })
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
    //cleanup function for develop in strict mode
    //Reference: https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
    return () => {
      let urlToFetch = urlNeedReeplace
        ? url
            .replace('page=' + (pageNumber - 1).toString(), 'page=')
            .replace('pageSize=' + pageSize.toString(), 'pageSize=')
        : url;
    };
  }, [pageNumber]);

  return {
    data,
    loading,
    error,
    totalPages,
    pageNumber,
    setPageNumber,
    pageSize,
    getData,
    onPageChange,
    filterValues,
    setFilterValues,
  };
};

export { useFetchWithPagination };
