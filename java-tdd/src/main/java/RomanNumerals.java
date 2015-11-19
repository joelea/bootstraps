import com.google.common.collect.ImmutableMap;

public class RomanNumerals {
    public String convertToNumeral(int number) {
        if (number >= 5) {
            return convertAndRecurse(number, 5);
        }
        if (number >= 1) {
            return convertAndRecurse(number, 1);
        }
        return "";
    }

    private String convertAndRecurse(int number, int currentNumber) {
        return numeralFor(currentNumber) + convertToNumeral(number - currentNumber);
    }

    private String numeralFor(int number) {
        ImmutableMap<Integer, String> numerals = ImmutableMap.of(
                1, "I",
                5, "V"
        );
        return numerals.get(number);
    }
}
