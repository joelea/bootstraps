import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class RomanNumeralsShould {
    private final RomanNumerals romanNumerals = new RomanNumerals();

    @Test public void
    convert_0_to_empty_string() {
        assertThat(romanNumerals.convertToNumeral(0), is(""));
    }
}
