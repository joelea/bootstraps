public class RomanNumerals {
    public String convertToNumeral(int number) {
        if(number >= 5) {
            return "V" + convertToNumeral(number - 5);
        }
        if (number >= 1) {
            return "I" + convertToNumeral(number - 1);
        }
        return "";
    }
}
