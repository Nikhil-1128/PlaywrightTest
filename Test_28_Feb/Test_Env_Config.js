let Env = "qa";

switch (Env) {
    case "dev":
        console.log("Environemnt: dev BASE URL: http://dev-api.testingacadamy.com API Key: stg_key_XXXX_XXXX Timeout: 8000ms Description: dev");
        break;

    case "staging":
        console.log("Environemnt: STAGING BASE URL: http://staging-api.testingacadamy.com API Key: stg_key_XXXX_XXXX Timeout: 8000ms Description: Staging");
        break;

    case "qa":
        console.log("Environemnt: qa BASE URL: http://qa-api.testingacadamy.com API Key: stg_key_XXXX_XXXX Timeout: 8000ms Description: qa");
        break;

    case "Production":
        console.log("Environemnt: Production BASE URL: http://Production-api.testingacadamy.com API Key: stg_key_XXXX_XXXX Timeout: 8000ms Description: Production");
        break;

    default:
        console.log("UNKNOWN - Environment");

}