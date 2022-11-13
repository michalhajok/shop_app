import types from "./types";
const { BRANDS_FAILED, BRANDS_FETCH, BRANDS_SUCCESS } = types;

const brandsFetch = () => ({ type: BRANDS_FETCH });
const brandsFailed = () => ({ type: BRANDS_FAILED });
const brandsSuccess = (data) => ({
  type: BRANDS_SUCCESS,
  payload: data,
});

const fetchData = () => {
  return (dispatch) => {
    dispatch(brandsFetch());
    fetch("https://shopbackend-michalhajok.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => dispatch(brandsSuccess(data)))
      .catch((err) => dispatch(brandsFailed()));
  };
};

const addBrand = (data) => {
  return (dispatch) => {
    dispatch(brandsFetch());
    fetch("https://shopbackend-michalhajok.vercel.app/categories/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
};

export default {
  fetchData,
  addBrand,
};
