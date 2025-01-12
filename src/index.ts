/**
 * Main entry point of the library.
 *
 * We unify all the exports here. This way, the user can import everything from
 * the library with a single import statement: both the Publicodes rules, the
 * wrapper functions, and the types.
 */

export type { Localisation, AideRuleNames } from "./data";
export type { Questions, RuleName, Situation } from "../publicodes-build";

export { slugify } from "./lib/utils";
export { AidesVeloEngine } from "./lib/AidesVeloEngine";
export type { Aide } from "./lib/AidesVeloEngine";
