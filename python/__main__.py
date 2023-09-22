def main():
    # prompts the user for the prices of each item
    prices = []
    for i in range(1, 6):
        userInput = 0

        while True:
            try:
                userInput = float(input(f"Price of item number {i}: "))
                break

            except:
                print("Invalid input. Try again")

        prices.append(userInput)

    # computes the total
    # get the sum of each price in the prices array
    total = 0
    for x in prices:
        total = total + x

    # computes the tax
    tax = total * 0.07

    subTotal = total - tax

    print(f"Sub-Total: {subTotal}")
    print(f"Tax: {tax}")
    print(f"Total: {total}")

main()