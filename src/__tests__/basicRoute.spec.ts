import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api/app';

chai.use(chaiHttp);

describe('Basic Route', () => {
    it('should return 200', async () => {
        const httpResponse = await chai
            .request(app)
            .get('/')

        chai.expect(httpResponse.status).to.equal(200);
        chai.expect(httpResponse.text).to.equal("Hello World!");
    });
});