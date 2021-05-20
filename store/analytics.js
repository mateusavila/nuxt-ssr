import * as Cookies from "js-cookie";

export const state = () => ({
  auth: {}
});

export const getters = {
  auth: state => state.auth
};

export const actions = {
  async updateAuth({ commit }, payload) {
    state.auth = { user: payload };

    await fetch(`${this.$config.basePlatform}/auth/signin`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(state.auth),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(response => {
        let authCookie = "";
        let cookieOptions = {
          expires: 3,
          secure: false,
          domain: ".a55.tech",
          sameSite: "strict"
        };
        if (this.$config.basePlatform == "https://auth-api.a55.tech/api") {
          cookieOptions.secure = true;
          authCookie = "A55_production_token";
        } else {
          cookieOptions.secure = false;
          authCookie = "A55_staging_token";
        }
        Cookies.set(
          authCookie,
          JSON.stringify({ auth: { token: response.user.token } }),
          cookieOptions
        );

        state.auth = response;
      })
      .catch(error => {
        state.auth = error;
      });
    return state.auth;
  }
};
