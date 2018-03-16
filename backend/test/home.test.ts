///<reference path="../node_modules/@types/mocha/index.d.ts"/>
import * as request from 'supertest';
import * as app from '../src/app';

describe('GET /', () => {
  it('should return 200 OK', (done) => {
    request(app).get('/')
      .expect(200, done)
      .then(res => {
        done();
      });
  });
});
