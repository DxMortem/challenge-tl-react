import { useEffect, useState } from 'react';
import { useQueryParams } from '../useQueryParams';

const useFetchWithPagination = (
  url,
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
  const needReload =
    getQueryParamByKey('needReload') != ''
      ? Boolean.valueOf(getQueryParamByKey('needReload'))
      : false;

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

  const onPageChange = (pageNumber) => {
    if (pageNumber != initialPageNumber) {
      setQueryParam('page', pageNumber);
      setPageNumber(pageNumber);
    }
  };

  const getData = () => {
    setLoading(true);
    url = urlNeedReeplace
      ? url
          .replace('page=', 'page=' + (pageNumber - 1).toString())
          .replace('pageSize=', 'pageSize=' + pageSize.toString())
      : url;
    fetch(url)
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
      url = urlNeedReeplace
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
  };
};

export { useFetchWithPagination };
