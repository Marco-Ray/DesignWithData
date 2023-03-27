import { createStore } from 'vuex';

export default createStore({
  state: {
    viewMode: 'carousel',
    project: {},
  },
  getters: {
    getViewMode: state => state.viewMode,
    getProject: state => state.project,
  },
  mutations: {
    switchViewMode (state, mode) {
      state.viewMode = mode;
    },
    setProject (state, project) {
      state.project = project;
    },
  },
  actions: {
  },
  modules: {
  },
});
