import { useEffect, useState } from 'react';

const useFetchWithPagination = (
  url,
  urlNeedReeplace,
  initialData,
  initialPageNumber,
  initialPageSize
) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    console.log(`pageNumber: ${pageNumber}`);
    console.log(`pageSize: ${pageSize}`);
    setLoading(true);
    url = urlNeedReeplace
      ? url
          .replace('page=', 'page=' + (pageNumber - 1).toString())
          .replace('pageSize=', 'pageSize=' + pageSize.toString())
      : url;
    console.log(`url: ${url}`);
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
  };
};

export { useFetchWithPagination };
