import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

// To fetch items from server

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();


  useEffect(() => {
    if (fetchStatus.fetching) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingDone());
        dispatch(itemsAction.addInitialItems(items[0])); // Fetching array of element in server and passing to itemsAction Slice
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
