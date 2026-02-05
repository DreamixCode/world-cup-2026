package eu.dreamix.wcapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan("eu.dreamix.wcapi.config")
public class WcDreamixApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(WcDreamixApiApplication.class, args);
    }
}
