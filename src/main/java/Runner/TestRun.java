package Runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/main/resources/Features"},format = {"json:target/cucumber.json","html:target/site/cucumber-pretty"},glue = "Steps",tags = {"@SmokeTest"})

public class TestRun extends AbstractTestNGCucumberTests {
}
