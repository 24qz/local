import {
  __commonJS
} from "./chunk-RSJERJUL.js";

// ../../../../桌面/实训二/logistics-project/node_modules/.pnpm/uni-app-fetch@0.0.3/node_modules/uni-app-fetch/dist/index.js
var require_dist = __commonJS({
  "../../../../桌面/实训二/logistics-project/node_modules/.pnpm/uni-app-fetch@0.0.3/node_modules/uni-app-fetch/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUniFetch = void 0;
    function createUniFetch(config) {
      var _a, _b;
      const loadingQueue = [];
      const uniFetch = (options) => {
        if (!options.url.startsWith("http") && uniFetch.baseURL) {
          options.url = uniFetch.baseURL + options.url;
        }
        uniFetch.intercept.request(options);
        if (!!(uniFetch === null || uniFetch === void 0 ? void 0 : uniFetch.loading) && !loadingQueue.length) {
          uni.showLoading(Object.assign({}, uniFetch.loading));
        }
        loadingQueue.push("loading");
        return new Promise((resolve, reject) => {
          uni.request(Object.assign(Object.assign({}, options), { success: (result) => {
            resolve(uniFetch.intercept.response(Object.assign(Object.assign({}, result), { config: options })));
          }, fail: reject, complete: () => {
            loadingQueue.pop();
            if (!loadingQueue.length)
              uni.hideLoading();
          } }));
        });
      };
      uniFetch.loading = config === null || config === void 0 ? void 0 : config.loading;
      uniFetch.baseURL = config === null || config === void 0 ? void 0 : config.baseURL;
      uniFetch.intercept = {
        request: (options) => options,
        response: (result) => result
      };
      if ((_a = config === null || config === void 0 ? void 0 : config.intercept) === null || _a === void 0 ? void 0 : _a.request) {
        uniFetch.intercept.request = config.intercept.request;
      }
      if ((_b = config === null || config === void 0 ? void 0 : config.intercept) === null || _b === void 0 ? void 0 : _b.response) {
        uniFetch.intercept.response = config.intercept.response;
      }
      uniFetch.get = function(url, data = {}) {
        return uniFetch({ url, method: "GET", data });
      };
      uniFetch.post = function(url, data = {}) {
        return uniFetch({ url, method: "POST", data });
      };
      uniFetch.put = function(url, data = {}) {
        return uniFetch({ url, method: "PUT", data });
      };
      uniFetch.delete = function(url, data) {
        return uniFetch({ url, method: "DELETE", data });
      };
      return uniFetch;
    }
    exports.createUniFetch = createUniFetch;
    exports.default = createUniFetch();
  }
});
export default require_dist();
//# sourceMappingURL=uni-app-fetch.js.map
