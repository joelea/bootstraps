import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class RomanNumeralsShould {
    private final RomanNumerals romanNumerals = new RomanNumerals();

    @Test public void
    convert_0_to_empty_string() {
        assertThat(romanNumerals.convertToNumeral(0), is(""));
    }

    @Test public void
    convert_1_to_I() {
        assertThat(romanNumerals.convertToNumeral(1), is("I"));
    }

    @Test public void
    convert_2_to_II() {
        assertThat(romanNumerals.convertToNumeral(2), is("II"));
    }

    @Test public void
    convert_4_to_IV() {
        assertThat(romanNumerals.convertToNumeral(4), is("IV"));
    }
    @Test public void
    convert_5_to_V() {
        assertThat(romanNumerals.convertToNumeral(5), is("V"));
    }

    @Test public void
    convert_7_To_VII() {
        assertThat(romanNumerals.convertToNumeral(7), is("VII"));
    }
}
