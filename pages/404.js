import { useEffect } from "react";
import Errors from "@components/Errors";
import { setError } from "@redux/reducers/errorSlice";
import { useDispatch } from "@redux/store";

export default function Custom404() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setError({
        status: true,
        type: "PAGE_NOT_FOUND",
        message: "Check, the page you're trying to reach",
      }),
    );
  }, [dispatch]);

  return <Errors />;
}
