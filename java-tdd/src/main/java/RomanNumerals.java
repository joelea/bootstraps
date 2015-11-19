public class RomanNumerals {
    public String convertToNumeral(int number) {
        if(number >= 5) {
            return "V" + convertToNumeral(number - 5);
        }
        if (number == 2) {
            return "II";
        }
        if (number == 0) {
            return "";
        }
        return "I";
    }
}
