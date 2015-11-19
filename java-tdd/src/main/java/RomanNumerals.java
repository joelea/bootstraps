import com.google.common.collect.ImmutableMap;

public class RomanNumerals {
    private final ImmutableMap<Integer, String> numerals = ImmutableMap.of(
            10, "X",
            9, "IX",
            5, "V",
            4, "IV",
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
        return numerals.get(currentNumber) + convertToNumeral(number - currentNumber);
    }

}
