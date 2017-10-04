(() => {
    "use strict";

    const ImprintProperties = require( './lib/func_imprint_prop' );
    const ParseURLQuery		= require( './lib/func_parse_url_query' );
    const APIs = {
        ImprintProperties,
        ParseURLQuery
    };



    const exported = ImprintProperties({}, APIs, [true, true, false]);
    ImprintProperties(exported, {
        register: () => {
            for (let idx in APIs) {
                if (APIs.hasOwnProperty(idx)) {
                    if (!APIs[idx].register) continue;

                    APIs[idx].register();
                }
            }

            return exported;
        }
    }, [true, true, false]);


	
    module.exports = exported;
})();
