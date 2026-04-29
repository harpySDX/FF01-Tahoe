#pragma once
#include <vector>
#include <string>
#include <functional>
#include "UWEvent.h"

struct AlgorithmEntry {
    std::string name;
    std::function<std::vector<int>(const std::vector<int>&)> run;
};

const std::vector<AlgorithmEntry>& getAlgorithms();