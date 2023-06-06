const express = require("express");
const { faker } = require("@faker-js/faker")
const app = express();
const port = 8000;

const createCompany = () => {
    const fakeCompany = {
        _id: faker.datatype.uuid(),
        companyName: faker.company.name(),
        slogan: faker.company.catchPhrase(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return fakeCompany;
}

const createUser = () => {
    const fakePerson = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    }
    return fakePerson;
}



app.get("/api/user/new", (req, res) => {
    res.json(createUser());
})

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) => {
    res.json({User: createUser(), Company: createCompany()});
})











app.listen(port, () => console.log(`Listening at port: ${port}`));