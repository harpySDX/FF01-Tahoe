#include <iostream>
#include <vector>
#include <cstdlib>
#include <Ctime>
#include <utility>
#include <functional>
#include <algorithm>
#include "BubbleSort.h"

using namespace std;

int main() {
    
    int arr[] = {1, 7, 9, 4, 6, 3, 5, 2, 8, 6};

    int length = 9;

    for (int i = 0; i < length; i++) {
        for (int j = 0;  j < (length - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

for (int i = 0; i < length; i++) {
        cout << arr[i] << " ";
}
cout << endl << endl;

}