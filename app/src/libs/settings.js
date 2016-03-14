const settings = {
  develop: {
    port: process.env.PORT || 8080
  }
};

export default settings[process.env.NODE_ENV];
