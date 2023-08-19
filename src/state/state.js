import { createSlice } from "@reduxjs/toolkit";

/* Ici, le code importe la fonction createSlice de Redux Toolkit. Ensuite, il définit un état initial pour le slice, qui comprend un 
mode (clair ou sombre), les informations de l'utilisateur connecté, le token d'authentification et une liste de publications sous forme
de tableau */
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: []
}

/* Cette partie crée le slice d'authentification à l'aide de la fonction createSlice. Le slice a un nom ("auth") et utilise l'état 
initial que nous avons défini io ambony io. Ensuite, il définit plusieurs actions (reducers) izay afaka ampiasaina pour mettre à jour 
l'état. */
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friend;
      } else {
        console.error("User friends non-existent");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post_id) {
          return action.payload.post;
        }
        return post
      });
      state.posts = updatedPosts;
    }
  }
});

/* Cette partie exporte toutes les actions créées dans le slice en utilisant la syntaxe de déstructuration d'objet (voir semaine tsy 
tadidiko de PROG1 XD). Elle exporte également le reducer du slice. */
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;
