(function() {
    "use strict";



    let __imprint = module.exports = (target, refObj, options = null) => {
        let [readonly, enumerable, configurable] = [false, true, true];
        if (typeof options === 'boolean') {
            readonly = options;
        } else
        if (Array.isArray(options)) {
            [readonly, enumerable, configurable] = options;
        } else {
            options = options || {};

            readonly = options.readonly;
            enumerable = options.enumerable;
            configurable = options.configurable;
        }

        for (let key in refObj) {
            if (refObj.hasOwnProperty(key)) {
                const val = refObj[key];
                Object.defineProperty(target, key, {
                    value: val,
                    writable: !readonly,
                    enumerable: !!enumerable,
                    configurable: !!configurable
                });
            }
        }
        return target;
    };

    Object.defineProperty(__imprint, "register", {
        value: () => {
            if (!Object.imprintProperties) {
                Object.defineProperty(Object, "imprintProperties", {
                    value: __imprint,
                    enumerable: true,
                    configurable: false,
                    writable: false
                });
            }
        },
        enumerable: false,
        configurable: false
    });
})();