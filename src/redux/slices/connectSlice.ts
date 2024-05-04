import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ConnectState {
  news: object[];
  backnews: object[];
  loading: boolean;
  error: string;
  idNews: object[];
}

const initialState = {
  news: [],
  backnews: [],
  loading: false,
  error: "",
  idNews: [],
} as ConnectState;

export const getnews = createAsyncThunk("getnews", async () => {
  const response = await axios(
    "https://6576df5f197926adf62ca419.mockapi.io/news"
  );
  //   console.log(response);
  return response.data;
});

export const getId = createAsyncThunk("getId", async (id) => {
  const response = await axios(
    "https://6576df5f197926adf62ca419.mockapi.io/news/" + id
  );
  return response.data;
});

export const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    getNews: (state) => {
      console.log(state.news);
    },
    like: (state, action) => {
      console.log(action.payload);
      const updLike: number = action.payload.likes + 1;
      const obj = {
        authors: action.payload.authors,
        category: action.payload.category,
        date: action.payload.date,
        dislikes: action.payload.dislikes,
        id: action.payload.id,
        image: action.payload.image,
        likes: updLike,
        text: action.payload.text,
        title: action.payload.title,
        topic: action.payload.topic,
        views: action.payload.views9,
      };
      console.log(obj);
      axios.put(
        "https://6576df5f197926adf62ca419.mockapi.io/news/" + action.payload.id,
        obj
      );
    },
    dislike: (state, action) => {
      console.log(action.payload);
      const updDislike: number = action.payload.dislikes - 1;
      const obj = {
        authors: action.payload.authors,
        category: action.payload.category,
        date: action.payload.date,
        dislikes: updDislike,
        id: action.payload.id,
        image: action.payload.image,
        likes: action.payload.likes,
        text: action.payload.text,
        title: action.payload.title,
        topic: action.payload.topic,
        views: action.payload.views9,
      };
      console.log(obj);
      axios.put(
        "https://6576df5f197926adf62ca419.mockapi.io/news/" + action.payload.id,
        obj
      );
    },
    deleteNews: (state, action) => {
      console.log(action.payload);
      axios.delete(
        "https://6576df5f197926adf62ca419.mockapi.io/news/" + action.payload
      );
    },
    searchNews: (state, action) => {
      console.log(action.payload);
      if (action.payload != "") {
        const word = action.payload;

        state.backnews = state.backnews.filter((elem: any) =>
          elem.title.toLowerCase().includes(word.toLowerCase())
        );
      } else {
        state.backnews = state.news;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getnews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getnews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.backnews = action.payload;
      //   console.log(state.news);
    });
    builder.addCase(getnews.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
    // getId
    builder.addCase(getId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getId.fulfilled, (state, action) => {
      state.loading = false;
      state.idNews = action.payload;
      state.backnews = action.payload;
      //   console.log(state.news);
    });
    builder.addCase(getId.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

//export
export const { getNews, like, dislike, deleteNews, searchNews } =
  connectSlice.actions;

// export const selectCount = (state: RootState) => state.connect.value;

export default connectSlice.reducer;
