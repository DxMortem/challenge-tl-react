import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const useQueryParams = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [allQueryParams, setAllQueryParams] = useState(
    Object.fromEntries(searchParams)
  );

  useEffect(() => {
    setAllQueryParams(Object.fromEntries(searchParams));
  }, [searchParams]);

  const getQueryParamByKey = (key) => {
    const params = new URLSearchParams(location.search);
    return params.get(key) || '';
  };

  const setQueryParam = (key, value) => {
    const params = new URLSearchParams(location.search);
    params.set(key, value.toString());
    setSearchParams(params.toString());
  };

  const removeQueryParamByKey = (key) => {
    const params = new URLSearchParams(location.search);
    params.delete(key);
    setSearchParams(params.toString());
  };

  return {
    allQueryParams,
    getQueryParamByKey,
    setQueryParam,
    removeQueryParamByKey,
  };
};

export { useQueryParams };
