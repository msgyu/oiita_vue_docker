const state = {
    user: null,
    token: window.localStorage.getItem("token")
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        state.token = token;
        window.localStorage.setItem("token", token);
    }
};

const actions = {
    async register(context, data) {
        const response = await axios.post("/api/register", data);
        context.commit("setUser", response.data.user);
        context.commit("setToken", response.data.token);
    },
    async login(context, data) {
        const response = await axios.post("/api/login", data);
        context.commit("setUser", response.data.user);
        context.commit("setToken", response.data.token);
    },
    async logout(context) {
        axios
            .post("/api/logout", null, {
                headers: {
                    Authorization: `Bearer ${state.token}`
                }
            })
            .then(result => {
                context.commit("setUser", null);
                context.commit("setToken", null);
            })
            .catch(error => {
                console.log(`Error! HTTP Status: ${error}`);
            });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
