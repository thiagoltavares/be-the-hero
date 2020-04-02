const generateUniqueID = require("../../src/utils/generateUniqueId");

describe("Generate an unique ID", () => {
  it("Should be generate an unique ID", () => {
    const id = generateUniqueID();

    expect(id).toHaveLength(8);
  });
});
