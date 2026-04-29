#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>
using namespace std;

//Declare Variables
int a[] = {7, 2, 6, 1, 3, 4, 5, 9, 8, 0};
int length = sizeof(a) / sizeof(a[0]);

void insertion() {
    for (int i = 1; i < length; i++) {
        for (int j = i; j > 0; j--) {
            if (a[j-1] > a[j]) {
                int temp = a[j-1];
                a[j-1] = a[j];
                a[j] = temp;
            }
            else {
                break;
            }
        }
    }
}

int main() {
    
    insertion();

    for (int i = 0; i < length; i++)
        printf("%d ", a[i]);
    printf("\n");
}