import app from "../../src/app";
import request from "supertest";
import connection from "../../src/database/connection";

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  /**
   * Routes Tests
   * 
   */

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      //.set('Authorization', 'put some ong valid id') To pass Headers eg: profile route
      .send({
        name: "Mitonaro2",
        email: "mito@gmail.com",
        whatsapp: "124568925",
        city: "Brasilia",
        uf: "DF"
      });

    expect(response.body).toHaveProperty("id");
  });
});
