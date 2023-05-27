import { createRouter } from "next-connect";

export const router = createRouter();

export const handler = () =>
  router.handler({
    onError: (err, req, res) => {
      console.error(err.stack);
      res.status(err.statusCode || 500).end(err.message);
    },
  });
