import org.junit.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

public class RomanNumeralsShould {
    @Test public void
    convert_1_to_I() {
        RomanNumerals romanNumerals = new RomanNumerals();
        assertThat(romanNumerals.convert(1), is("I"));
    }
}
