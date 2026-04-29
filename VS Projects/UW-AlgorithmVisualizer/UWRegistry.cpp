#pragma once
#include <string>
#include <vector>
#include <functional>

struct AlgorithmEntry {
    std::string name;
    std::function<std::vector<int>(const std::vector<int>&)> run;
};