# initialize the value of user_input
user_input = None

# Get the input from user
while True:
    # get the user input in a try except block to catch errors.
    try:
        # throws an error if input is not a valid numeric
        user_input = int(input('Enter a number between 0 and 1000: '))

        # raises an Exception if the input is out of range
        if user_input < 1 or user_input > 999:
            raise Exception()
        
        # breaks out of the loop if everything is valid
        break
    except:
        print("Invalid Number")

remaining_digits = user_input

total = 0

# Loops until the digits are iterated
while remaining_digits > 0:
    total += remaining_digits % 10
    remaining_digits //= 10

# Prints the result   
print(f"Digits sum of {user_input} is {total}")