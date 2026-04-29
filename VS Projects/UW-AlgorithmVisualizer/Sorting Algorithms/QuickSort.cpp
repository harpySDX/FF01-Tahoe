#include <iostream>
#include <utility>
#include <cstdlib>
#include <ctime>
#include <functional>
#include <vector>
using namespace std;

void quicksort(int arr[], int length);
void quicksort_recursion(int arr[], int low, int high);
int partition(int arr[], int low, int high);

void quicksort(int arr[], int length) {
    quicksort_recursion(arr, 0, length - 1);
}

void quicksort_recursion(int arr[], int low, int high) {
    if (low < high) {
        int pivot_index = partition(arr, low, high);
        quicksort_recursion(arr, low, pivot_index - 1);
        quicksort_recursion(arr, pivot_index + 1, high);
    }
}

int partition (int arr[], int low, int high) {
    int pivot = arr[high];

    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

int main () {

    cout << "Program Started\n";
    int a[] = {6, 3, 2, 98, 999, 69, 420, 421, 5, 11, 62, 71};
    int length = sizeof(a) / sizeof(a[0]);

    quicksort(a, length);

    for (int i = 0; i < length; i++) {
        cout << a[i] << " ";
    }
    cout << endl << endl;

    return 0;
}