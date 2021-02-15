import { rest } from "msw";
import { BASE_URL } from "../constants/api";

export const handlers = [
  rest.get(`${BASE_URL}ability/mock-success`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(require("./api/ability.json")));
  }),
  rest.get(`${BASE_URL}ability/mock-error`, (req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
