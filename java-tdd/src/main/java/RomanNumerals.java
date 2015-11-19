import com.google.common.collect.ImmutableMap;

public class RomanNumerals {
    public String convertToNumeral(int number) {
        if (number >= 5) {
            return numeralFor(5) + convertToNumeral(number - 5);
        }
        if (number >= 1) {
            return numeralFor(1) + convertToNumeral(number - 1);
        }
        return "";
    }

    private String numeralFor(int number) {
        ImmutableMap<Integer, String> numerals = ImmutableMap.of(
                1, "I",
                5, "V"
        );
        return numerals.get(number);
    }
}
