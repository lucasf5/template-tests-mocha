import chai from "chai";
import chaiHttp from "chai-http";
import app from "../api/app";

chai.use(chaiHttp);

describe("Verificando se todas as rotas possuem retornos corretos", () => {
  it("getAll deve retornar 200", async () => {
    const httpResponse = await chai.request(app).get("/users");

    chai.expect(httpResponse.status).to.equal(200);
  });

  it("createUser deve retornar 201", async () => {

    const httpResponse = await chai.request(app).post("/users").send({
      name: "Lucas Ferreira",
      email: "lucas123@gmail.com",
      password: "123456"
    });

    chai.expect(httpResponse.status).to.equal(201);
  });

  it("createUser deve retornar 400", async () => {
    const httpResponse = await chai.request(app).post("/users").send({
      name: "Lucas Ferreira",
      email: "lucas@gmail.com",
      password: "123456"
    });

    chai.expect(httpResponse.status).to.equal(400);
    chai.expect(httpResponse.text).to.equal("Usuário já cadastrado.");
  });

  it("createUser deve retornar 400", async () => {
    const httpResponse = await chai.request(app).post("/users").send({
      name: "",
      email: "lucas@gmail.com",
      password: "123456"
    });

    chai.expect(httpResponse.status).to.equal(400);
    chai.expect(httpResponse.text).to.equal("O campo name é obrigatório.");
  });

  it("createUser deve retornar 400", async () => {
    const httpResponse = await chai.request(app).post("/users").send({
      name: "Lucas",
      email: "",
      password: "123456"
    });

    chai.expect(httpResponse.status).to.equal(400);
    chai.expect(httpResponse.text).to.equal("O campo email é obrigatório.");
  });

  it("createUser deve retornar 400", async () => {
    const httpResponse = await chai.request(app).post("/users").send({
      name: "Lucas",
      email: "lucas@gmail.com",
      password: ""
    });

    chai.expect(httpResponse.status).to.equal(400);
    chai.expect(httpResponse.text).to.equal("O campo password é obrigatório.");
  });

});
