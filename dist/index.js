/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 813:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const core = __nccwpck_require__(396);

const getInputs = () => {
  const resource = core.getInput("resource");
  const action = core.getInput("action");
  return {
    resource,
    action,
  };
};

module.exports = { getInputs };

/***/ }),

/***/ 351:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { getInputs } = __nccwpck_require__(813);
const resources = __nccwpck_require__(984);
module.exports = { getInputs, resources };

/***/ }),

/***/ 984:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


   
const jws = __nccwpck_require__(579);

module.exports = { jws };

/***/ }),

/***/ 579:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { sign } = __nccwpck_require__(750);

module.exports = { sign };

/***/ }),

/***/ 750:
/***/ ((module) => {


const sign = async ({resource, action}) => {
    let outputs = { resource, action };
    //  todo: fill this in
    return outputs;
};

module.exports = { sign };

/***/ }),

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(396);

const { getInputs, resources } = __nccwpck_require__(351);

async function run() {
  try {
    const inputs = getInputs();
    if (resources[inputs.resource]) {
      const outputs = await resources[inputs.resource][inputs.action](inputs);
      core.setOutput("response", outputs);
    } else {
      console.warn(JSON.stringify(inputs, null, 2));
      throw new Error("Unsupported resource or action.");
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
})();

module.exports = __webpack_exports__;
/******/ })()
;