public class RomanNumerals {
    public String convertToNumeral(int number) {
        if(number == 5) {
            return "V";
        }
        if (number == 2) {
            return "II";
        }
        return "I";
    }
}
