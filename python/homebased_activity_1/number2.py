# Initialize user input variables
NUM_OF_MALE = 0
NUM_OF_FEMALE = 0

# Loops until both the user input variable are valid
while True:
    try:
        NUM_OF_MALE = int(input('Number of males in class:'))
        NUM_OF_FEMALE = int(input("Number of females in class: "))

        break
    except:
        print("Invalid number. Please repeat.")


TOTAL_NUM_OF_STUDENTS = NUM_OF_FEMALE + NUM_OF_MALE

MALE_PERCENTAGE = round((NUM_OF_MALE / TOTAL_NUM_OF_STUDENTS) * 100)
FEMALE_PERCENTAGE = round((NUM_OF_FEMALE / TOTAL_NUM_OF_STUDENTS) * 100)

print(f"Male: {MALE_PERCENTAGE} Female: {FEMALE_PERCENTAGE}")
