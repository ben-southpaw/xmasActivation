let urlSearch;

export const getUrlSearch = () => {
  if (urlSearch) {
    return urlSearch;
  } else {
    return (urlSearch = new URLSearchParams(window.location.search));
  }
};

export default urlSearch;
