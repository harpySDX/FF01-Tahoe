#include <iostream>
#include <vector>
#include "UWRegistry.h"

int main() {
    // Prepare an input array
    std::vector<int> a = {5, 3, 8, 1, 2};

    // Retrieve the list of available algorithms
    const auto& algorithms = getAlgorithms();

    // For now, choose an algorithm by index (e.g., 0 = Bubble Sort, 1 = Merge Sort)
    int choice = 1; // Change this to select a different algorithm

    // Run the selected algorithm
    auto result = algorithms[choice].run(a);

    // Display the result
    std::cout << "Result from " << algorithms[choice].name << ":\n";
    for (int value : result) {
        std::cout << value << " ";
    }
    std::cout << "\n";

    return 0;
}