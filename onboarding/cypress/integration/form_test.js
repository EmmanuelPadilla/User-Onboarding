describe("onboarding app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("sanity check to make sure tests work", () => {
    // "expect" is an assertion
    // there can be several assertions per test
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5); // strict ===
    expect({}).not.to.equal({}); // strict ===
    expect({}).to.eql({}); // not strict
  });

  const firstName = () => cy.get("input[name=first_name]");
  const lastName = () => cy.get("input[name=last_name]");
  const email = () => cy.get("input[name=email]");
  const password = () => cy.get("input[name=password]");
  const tos = () => cy.get('[type="checkbox"]');
  const submit = () => cy.get("button[id='button']");

  it("check the elemets are showing", () => {
    firstName().should("exist");
    lastName().should("exist");
    email().should("exist");
    password().should("exist");
    tos().should("exist");
    submit().should("exist");
  });

  it("check can type in the inputs", () => {
    firstName()
      .should("have.value", "")
      .type("Pancho")
      .should("have.value", "Pancho");

    lastName()
      .should("have.value", "")
      .type("Villa")
      .should("have.value", "Villa");

    email()
      .should("have.value", "")
      .type("fakeemail@fakeemail.com")
      .should("have.value", "fakeemail@fakeemail.com");

    password()
      .should("have.value", "")
      .type("1234asdf")
      .should("have.value", "1234asdf");

    tos().check();
    // tos().uncheck();

    submit().click();
  });

  it("check errors", () => {
    firstName().should("have.value", "").type("Pa").should("have.value", "Pa");

    lastName().should("have.value", "").type("V").should("have.value", "V");

    email()
      .should("have.value", "")
      .type("fakeemailfakeemail.com")
      .should("have.value", "fakeemailfakeemail.com");

    password()
      .should("have.value", "")
      .type("1234asd")
      .should("have.value", "1234asd");

    // tos().check();
    // tos().uncheck();

    submit().click();
  });
});
