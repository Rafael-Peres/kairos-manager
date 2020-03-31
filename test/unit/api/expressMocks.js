exports.req = jest.fn();

exports.res = () => ({
  body: '',
  statusCode: 200,
  json(body) {
    this.body = body;
    return this;
  },
  status(statusCode) {
    this.statusCode = statusCode;
    return this;
  },
});

exports.next = jest.fn();
