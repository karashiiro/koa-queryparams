import { Middleware, ParameterizedContext } from "koa";

declare function queryParams(): Middleware<ParameterizedContext<any, {}>>;

export = queryParams;
