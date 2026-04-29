#pragma once
#include <vector>

struct Event {
    enum Type {
        Compare,
        Swap,
        Highlight,
        Found,
        MoveLow,
        MoveHigh,
        NotFound
    };

    Type type;
    int indexA;
    int indexB;

    // Factory functions for readability
    static Event CompareEvent(int a, int b) {
        return {Compare, a, b};
    }

    static Event SwapEvent(int a, int b) {
        return {Swap, a, b};
    }

    static Event HighlightEvent(int a) {
        return {Highlight, a, -1};
    }

    static Event FoundEvent(int a) {
        return {Found, a, -1};
    }

    static Event MoveLowEvent(int a) {
        return {MoveLow, a, -1};
    }

    static Event MoveHighEvent(int a) {
        return {MoveHigh, a, -1};
    }

    static Event NotFoundEvent() {
        return {NotFound, -1, -1};
    }
};