package eu.dreamix.wcapi.external;

public record RetrieveResult<T>(Integer totalRetrieved, Integer newRecords, T data) {
}
