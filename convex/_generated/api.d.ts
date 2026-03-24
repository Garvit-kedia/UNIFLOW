/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

<<<<<<< HEAD
import type * as dashboard from "../dashboard.js";
import type * as events from "../events.js";
import type * as explore from "../explore.js";
import type * as registrations from "../registrations.js";
import type * as search from "../search.js";
=======
import type * as explore from "../explore.js";
>>>>>>> 7b5c526513bf9a49109cb4ca214e8be553983d00
import type * as seed from "../seed.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

<<<<<<< HEAD
/**
 * A utility for referencing Convex functions in your app's API.
=======
declare const fullApi: ApiFromModules<{
  explore: typeof explore;
  seed: typeof seed;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
>>>>>>> 7b5c526513bf9a49109cb4ca214e8be553983d00
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
<<<<<<< HEAD
declare const fullApi: ApiFromModules<{
  dashboard: typeof dashboard;
  events: typeof events;
  explore: typeof explore;
  registrations: typeof registrations;
  search: typeof search;
  seed: typeof seed;
  users: typeof users;
}>;
declare const fullApiWithMounts: typeof fullApi;

export declare const api: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApiWithMounts,
=======
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
>>>>>>> 7b5c526513bf9a49109cb4ca214e8be553983d00
  FunctionReference<any, "internal">
>;

export declare const components: {};
