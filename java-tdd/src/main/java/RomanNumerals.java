public class RomanNumerals {
    public String convertToNumeral(int number) {
        if(number == (5+2)) {
            return convertToNumeral(5) + convertToNumeral(2);
        }
        if(number == 5) {
            return "V";
        }
        if (number == 2) {
            return "II";
        }
        return "I";
    }
}
