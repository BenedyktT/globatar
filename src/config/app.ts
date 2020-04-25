const { NODE_ENV = "development", APP_PORT = 3000 } = process.env;

const IN_PROD = NODE_ENV === "production";

export { IN_PROD, APP_PORT };
