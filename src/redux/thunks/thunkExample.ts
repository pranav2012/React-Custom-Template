import { makeRequest } from "util/functions/apiCall";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";
import { setError } from "@redux/reducers/errorSlice";

export const getCandidates = createAsyncThunk(
  "error/publish",
  async (_, thunkAPI) => {
    let storeCandidatesFlag = false;
    const state = thunkAPI.getState() as RootState;
    try {
      const getCandidates = await makeRequest({
        mainApi: true,
        endPoint: "/error",
        body: {
          error: state.error
        },
        type: "POST",
      });
      if (getCandidates.success)
        return getCandidates.candidates.map((data: any) => data[0]);
      else storeCandidatesFlag = true;
    } catch (error) {
      thunkAPI.dispatch(
        setError({
          status: true,
          type: "CANDIDATE_DATA_FETCH",
          message: "Error fetching candidates data!",
        }),
      );
    }
  }
);
