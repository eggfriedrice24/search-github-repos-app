import { useState } from "react";
// import useDebounce from "./useDebounce";
import axios from "axios";

export const useFetchAll = () => {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [listToDisplay, setListToDisplay] = useState([]);

  // const debounceText = useDebounce(searchItem, 500)

  const handleChange = async (e) => {
    const { value } = e.target;

    setSearchItem(value);
    if (value === "") {
      return setListToDisplay([]);
    }
    setLoading(true);
    const { data } = await axios.get("https://api.github.com/repositories");
    setLoading(false);
    setListToDisplay(
      data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return {
    searchItem,
    handleChange,
    loading,
    listToDisplay,
  };
};
