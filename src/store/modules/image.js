import api from "../../api/imgur";
import { router } from "../../main";

const state = {
  images: [],
};

const getters = {
  allImages: (state) => state.images,
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

const actions = {
  async fetchImages({ rootState, commit }) {
    //check for access token
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },

  async uploadImages({ rootState }, images) {
    //GEt the access token
    const { token } = rootState.auth;

    //Call our API module to do the upload

    await api.uploadImages(images, token);

    //Redirect our user to ImageList component
    router.push("/");
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
