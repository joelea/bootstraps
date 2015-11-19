import com.google.common.collect.ImmutableMap;

public class RomanNumerals {
    private final ImmutableMap<Integer, String> numerals = ImmutableMap.of(
            5, "V",
            1, "I"
    );

    public String convertToNumeral(int number) {
        for(int atomicNumber : numerals.keySet()) {
            if (number >= atomicNumber) {
                return convertAndRecurse(number, atomicNumber);
            }
        }
        return "";
    }

    private String convertAndRecurse(int number, int currentNumber) {
        return numeralFor(currentNumber) + convertToNumeral(number - currentNumber);
    }

    private String numeralFor(int number) {
        return numerals.get(number);
    }
}
