import React from "react";
import PropTypes from "prop-types";
import { SearchInputSt } from "./SearchInput.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "redux/selectors";
import { setFilter } from "redux/filterSlice";

export default function SearchInput() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <SearchInputSt
        type="text"
        name={filter}
        value={filter}
        onChange={onChange}
        placeholder="Please write name"
      />
    </div>
  );
}

SearchInput.propTypes = {
  filter: PropTypes.string,
  changeFilterInput: PropTypes.func,
};
