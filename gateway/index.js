const fastify = require("fastify")({
  logger: true
});

const proxy = require("fastify-http-proxy");

fastify.register(proxy, {
  upstream: "http://localhost:4100",
  prefix: "/auth",
  http2: false
});

fastify.register(proxy, {
    upstream: "http://localhost:4200",
    prefix: "/auth/api",
    rewritePrefix: "/api",
    http2: false
  });

const start = async () => {
  try {
    await fastify.listen(4000, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
