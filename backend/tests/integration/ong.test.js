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
        name: "Red Cross",
        email: "rd@gmail.com",
        whatsapp: "124568925",
        city: "Porto",
        uf: "PT"
      });

    expect(response.body).toHaveProperty("id");
  });
});
