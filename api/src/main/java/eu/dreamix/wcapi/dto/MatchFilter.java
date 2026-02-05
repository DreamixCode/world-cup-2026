package eu.dreamix.wcapi.dto;

import lombok.Value;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

/**
 * @param date LocalDate dateFrom;    LocalDate dateTo;
 */
public record MatchFilter(@DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
}
