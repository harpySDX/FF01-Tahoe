#include <iostream>
using namespace std;

int t;
int a[13] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13};
int length = sizeof(a) / sizeof(a[0]);
int target = a[t];

int main() {

    cin >> t;

    int low = 0;
    int high = length - 1;

    while (low <= high) {
        int mid = (low + high) / 2;
        int temp = a[mid];

        cout << "Checking index " << mid << " (value " << temp << ")\n";

        if (target == temp) {
            cout << "Found target at index " << mid << endl;
            return 0;
        }
        else if (target > temp) {
            low = mid + 1; 
        }
        else {
            high = mid - 1; 
        }
    }

    cout << "Target not found.\n";
}