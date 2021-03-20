package Steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.http.ContentType;
import org.junit.Assert;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class PetServicesStep {

    private static final String BASE_URL = "https://petstore.swagger.io/v2/";
    private static Response response;
    private static String jsonString;
    private static String name;
    private static String status;

    @When("^User gets a existent pet by id (\\d+)$")
    public void getExistentPet(int id) {

        RestAssured.baseURI = BASE_URL;
        RequestSpecification request = RestAssured.given();
        response = request.get("/pet/"+id);

        jsonString = response.asString();
        name = JsonPath.from(jsonString).get("name");
        status = JsonPath.from(jsonString).get("status");
    }

    @Then("^User verify pets detail has the ([^\"]*) and ([^\"]*) as expected$")
    public void UserVerifyPetsDetailIsAsExpected(String petName, String petStatus) {

        Assert.assertEquals(response.getStatusCode(),200);
        Assert.assertEquals(name, petName);
        Assert.assertEquals(status, petStatus);
    }

    @Given("^User add a new pet with ([^\"]*) and (\\d+) and ([^\"]*)$")
    public void userAddNewPet(String name, int id, String status) {
        String body = "{\n" +
                "  \"id\": "+id+",\n" +
                "  \"category\": {\n" +
                "    \"id\": "+id+",\n" +
                "    \"name\": \"string\"\n" +
                "  },\n" +
                "  \"name\": \""+name+"\",\n" +
                "  \"photoUrls\": [\n" +
                "    \"string\"\n" +
                "  ],\n" +
                "  \"tags\": [\n" +
                "    {\n" +
                "      \"id\": 0,\n" +
                "      \"name\": \"string\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"status\": \""+status+"\"\n" +
                "}";

        RestAssured.baseURI = BASE_URL;
        RequestSpecification request = RestAssured.given();
        request.contentType(ContentType.JSON);
        request.body(body);
        request.post("/pet");
    }

    @When ("^User updates pets information ([^\"]*) and ([^\"]*) and ([^\"]*)$")
    public void UpdatePetInformation(String name, String status, String id){
        String body = "{\n" +
                "  \"id\": "+id+",\n" +
                "  \"category\": {\n" +
                "    \"id\": "+id+",\n" +
                "    \"name\": \"string\"\n" +
                "  },\n" +
                "  \"name\": \""+name+"\",\n" +
                "  \"photoUrls\": [\n" +
                "    \"no photos\"\n" +
                "  ],\n" +
                "  \"tags\": [\n" +
                "    {\n" +
                "      \"id\": 0,\n" +
                "      \"name\": \"string\"\n" +
                "    }\n" +
                "  ],\n" +
                "  \"status\": \""+status+"\"\n" +
                "}";

        RestAssured.baseURI = BASE_URL;
        RequestSpecification request = RestAssured.given();
        request.contentType(ContentType.JSON);
        request.body(body);
        request.put("/pet");
    }
}
