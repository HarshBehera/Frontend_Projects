package com.stackroute.basics;

import java.math.BigInteger;
import java.util.Scanner;

public class Palindrome {

    public static void main(String[] args) {
        Palindrome palindrome = new Palindrome();
        BigInteger inputNumber = palindrome.getValue();

        if (palindrome.inputValidator(inputNumber)) {
            String result = palindrome.palindromeValidator(inputNumber);
            System.out.println(result);
        } else {
            System.out.println("Invalid input. Please enter a valid positive integer.");
        }
    }

    // Get values from the user using Scanner and return the input number as BigInteger
    public BigInteger getValue() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        String inputNumber = scanner.nextLine();
        scanner.close();

        try {
            return new BigInteger(inputNumber);
        } catch (NumberFormatException e) {
            return BigInteger.ZERO;
        }
    }

    // Validate the input as a positive integer and return boolean
    public boolean inputValidator(BigInteger number) {
        return number.signum() == 1; // Check if the number is positive
    }

    // Check whether the input number is a palindrome and return the result
    public String palindromeValidator(BigInteger number) {
        String numberStr = number.toString();
        int left = 0;
        int right = numberStr.length() - 1;

        while (left < right) {
            if (numberStr.charAt(left) != numberStr.charAt(right)) {
                return number + " is not a palindrome.";
            }
            left++;
            right--;
        }

        return number.toString() + " is a palindrome.";
    }
}