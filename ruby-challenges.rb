# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7

if num1 % 2 == 0
   p '7 is even'
else
   p '7 is odd'
end
# Expected output: '7 is odd'


num2 = 42
if num2 % 2 == 0
   p '42 is even'
else
   p '42 is odd'
end
# Expected output: '42 is even'

num3 = 221
if num3 % 2 == 0
   p '221 is even'
else
   p '221 is odd'
end

# Expected output: '221 is odd'



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
p beatles_album1.delete('a,e,i,o,u')
# Expected output: 'Rbbr Sl'

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
p beatles_album2.delete('a,e,i,o,u')


beatles_album3 = 'Abbey Road'
p beatles_album3.delete('a,e,i,o,u')
# Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
if palindrome_tester1.upcase.reverse == palindrome_tester1.upcase
   p 'Racecar is a palindrome'
else
   p 'Racecar is not palindrome'
end
# Expected output: 'Racecar is a palindrome'

palindrome_tester2 = 'LEARN'
if palindrome_tester2.upcase.reverse == palindrome_tester2.upcase
    p 'LEARN is a palindrome'
else
    p 'LEARN is not palindrome'
end
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'

if palindrome_tester3.reverse.upcase == palindrome_tester3.upcase.upcase
    p'Rotator is a palindrome'
else
    p'Rotator is not palindrome'
end
# Expected output: 'Rotator is a palindrome'
