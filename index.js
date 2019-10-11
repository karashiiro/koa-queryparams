module.exports = () => {
    return async (ctx, next) => {
        const queryParameters = ctx.url.substr(ctx.url.indexOf("?")).split(/[?&]+/g).slice(1);

        ctx.queryParams = {};
        if (queryParameters) {
            for (const param of queryParameters) {
                const keyValuePair = param.split(/[^a-zA-Z0-9]+/g);
                ctx.queryParams[keyValuePair[0]] = keyValuePair[1];
            }
        }

        await next();
    }
};
