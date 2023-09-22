import random

print("random number range")
RANGE_START = 0
RANGE_END = 0
while True:
    try:
        RANGE_START = int(input("start: "))
        RANGE_END = int(input(("end: ")))

        if RANGE_START >= RANGE_END:
            print("End should be greater than Start.")
            continue

        break
    except ValueError:
        print("Input not a number. Try again.")

NUM_OF_TRY = 0
while True:
    try:
        NUM_OF_TRY = int(
            input("Number of times you want to guess the random number (100 max): "))

        if NUM_OF_TRY > 100:
            NUM_OF_TRY = 100
            print("Number of try set to 100.")
        break
    except ValueError:
        print("not a number. Try again.")

RANDOM_NUM = random.randint(RANGE_START, RANGE_END+1)

remainingTry = NUM_OF_TRY
userInput = None
while remainingTry > 0:
    print(f"Remaining Tries: {remainingTry}")
    try:
        userInput = int(
            input(f"Enter your number guess between {RANGE_START}-{RANGE_END}:"))
        remainingTry -= 1

        if userInput < RANDOM_NUM:
            print("Too low")
        elif userInput > RANDOM_NUM:
            print("Too high")
        else:
            print("Correct!")
            print(
                f"Congratulation. You've guessed the random number with {NUM_OF_TRY - remainingTry} tries.")
            break

    except ValueError:
        print("Not a number. Try again.")

print("Game Over")
