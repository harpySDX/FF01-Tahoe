let currentArray = [];
let stopRequested = false;

// Generate a random array
async function generateArray(size = 35, min = 15, max = 300) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
        renderArray(arr);
        await sleep(30);
    }
    return arr;
}

// Render the array as bars
function renderArray(arr, highlightA = -1, highlightB = -1, swap = false) {
    const container = document.getElementById("display");
    container.innerHTML = "";

    arr.forEach((value, index) => {
        const bar = document.createElement("div");
        bar.style.height = value + "px";
        bar.style.width = "30px";
        bar.style.margin = "0 3px";
        bar.style.borderRadius = "4px";
        bar.style.marginBottom = "160px";

        //Permits User To Drag Bars
        bar.draggable = true;
        bar.dataset.index = index;
        bar.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", index);
        });

        bar.addEventListener("dragover", (e) => {
            e.preventDefault(); // allow drop
        });

        bar.addEventListener("drop", (e) => {
            e.preventDefault();
            const from = parseInt(e.dataTransfer.getData("text/plain"));
            const to = index;
            manualSort(from, to);
        });


        
        //Color Code The Bars
        if (index === highlightA || index === highlightB) {
            bar.style.background = swap ? "#ff6b6b" : "#6b9cff";
            //Make Bars Pop Out When Highlighted
            bar.style.transform = "scaleX(1.2)";
            bar.style.transition = "transform 0.2s";
        } else {
            bar.style.background = "#adc5ae";
        }

        container.appendChild(bar);
    });
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

//Enable/Disable Buttons During Sorting
function disableButtons(disabled) {
    document.querySelectorAll(".menu-button").forEach(btn => {
        btn.disabled = disabled;
    });
}


// Sort The Array Buttons
document.getElementById("bubbleSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;        
    await sleep(50);              
    currentArray = await generateArray();
    stopRequested = false;       
    let copy = [...currentArray];
    await sleep(1600);
    await bubbleSort(currentArray);
    disableButtons(false);
});
document.getElementById("mergeSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;                      
    currentArray = await generateArray();
    stopRequested = false;       
    let copy = [...currentArray];
    await sleep(1600);
    await mergeSort(currentArray);
    disableButtons(false);
});
document.getElementById("quickSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await quickSort(currentArray, 0, currentArray.length - 1);
    disableButtons(false);
});
document.getElementById("yahtzeeSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await YahtzeeSort(currentArray);
    disableButtons(false);
});
document.getElementById("insertionSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await insertionSort(currentArray);
    disableButtons(false);
});
document.getElementById("selectionSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await selectionSort(currentArray);
    disableButtons(false);
});
let manualMode = false;
document.getElementById("manualSort").addEventListener("click", () => {
    manualMode = true;
    disableButtons(true);
    alert("Manual Sort enabled. Drag bars to reorder them.");
});
document.getElementById("bogoSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await bogoSort();
    disableButtons(false);
});
document.getElementById("SixSevenSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await SixSevenSort();
    disableButtons(false);
});
document.getElementById("radixSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await RadixSort(currentArray);
    disableButtons(false);
});
document.getElementById("schrodingerSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await SchrodingerSort(currentArray);
    disableButtons(false);
});
document.getElementById("ragequitSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await RagequitSort(currentArray);
    disableButtons(false);
});
document.getElementById("procrastinationSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await ProcrastinationSort(currentArray);
    disableButtons(false);
});
document.getElementById("cocktailSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await CocktailSort(currentArray);
    disableButtons(false);
});
document.getElementById("binarySort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await BinarySort(currentArray);
    disableButtons(false);
});
document.getElementById("linearSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await LinearSort(currentArray);
    disableButtons(false);
});
document.getElementById("cuckooSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await CuckooSort(currentArray);
    disableButtons(false);
});
document.getElementById("lotterySort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await LotterySort(currentArray);
    disableButtons(false);
});
document.getElementById("boomerSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await BoomerSort(currentArray);
    disableButtons(false);
});
document.getElementById("tinderSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await TinderSort(currentArray);
    disableButtons(false);
});
document.getElementById("miracleSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await MiracleSort(currentArray);
    disableButtons(false);
});
document.getElementById("Unsort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await Unsort(currentArray);
    disableButtons(false);
});
document.getElementById("No Sort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await NoSort(currentArray);
    disableButtons(false);
});
document.getElementById("TrumpSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await TrumpSort(currentArray);
    disableButtons(false);
});
document.getElementById("GambleSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await GambleSort(currentArray);
    disableButtons(false);
});
document.getElementById("ADHDSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await ADHDSort(currentArray);
    disableButtons(false);
});
document.getElementById("VibeSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await VibeSort(currentArray);
    disableButtons(false);
});
document.getElementById("AnxietySort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await AnxietySort(currentArray);
    disableButtons(false);
});
document.getElementById("DogeSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await DogeSort(currentArray);
    disableButtons(false);
});
document.getElementById("AiSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await AiSort(currentArray);
    disableButtons(false);
});
document.getElementById("VampireSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await VampireSort(currentArray);
    disableButtons(false);
});
document.getElementById("SoulsLikeSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await SoulsLikeSort(currentArray);
    disableButtons(false);
});
document.getElementById("DJDropSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await DJDropSort(currentArray);
    disableButtons(false);
});
document.getElementById("SpeedrunSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await SpeedrunSort(currentArray);
    disableButtons(false);
});
document.getElementById("MinesweeperSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await MinesweeperSort(currentArray);
    disableButtons(false);
});
document.getElementById("MagnetSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await MagnetSort(currentArray);
    disableButtons(false);
});
document.getElementById("PancakeSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await PancakeSort(currentArray);
    disableButtons(false);
});
document.getElementById("CraneSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await CraneSort(currentArray);
    disableButtons(false);
});
document.getElementById("Black Hole Sort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await BlackHoleSort(currentArray);
    disableButtons(false);
});
document.getElementById("Mother-In-LawSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await MotherInLawSort(currentArray);
    disableButtons(false);
});
document.getElementById("DiscordModSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await DiscordModSort(currentArray);
    disableButtons(false);
});
document.getElementById("999ms Ping Sort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await PingSort(currentArray);
    disableButtons(false);
});
document.getElementById("Vip Sort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await VipSort(currentArray);
    disableButtons(false);
});
document.getElementById("Interrogation Sort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await InterrogationSort(currentArray);
    disableButtons(false);
});
document.getElementById("DrunkSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await DrunkSort(currentArray);
    disableButtons(false);
});
document.getElementById("YoutubeSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await YoutubeSort(currentArray);
    disableButtons(false);
});
document.getElementById("AmericanSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await AmericanSort(currentArray);
    disableButtons(false);
});
document.getElementById("WindowsSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await WindowsSort(currentArray);
    disableButtons(false);
});
document.getElementById("debtSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;   
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await DebtSort(currentArray);
    disableButtons(false);
});
document.getElementById("TsarSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await TsarSort(currentArray);
    disableButtons(false);
});
document.getElementById("InflationSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await InflationSort(currentArray);
    disableButtons(false);
});
document.getElementById("EA Sort").addEventListener("click", async () => {  
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await EASort(currentArray);
    disableButtons(false);
});
document.getElementById("CapitalismSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await CapitalismSort(currentArray);
    disableButtons(false);
});
document.getElementById("StalinSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await StalinSort(currentArray);
    disableButtons(false);
});
document.getElementById("GaslightSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await GaslightSort(currentArray);
    disableButtons(false);
});
document.getElementById("NintendoSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await NintendoSort(currentArray);
    disableButtons(false);
});
document.getElementById("UbisoftSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await UbisoftSort(currentArray);
    disableButtons(false);
});
document.getElementById("PerfectionistSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await PerfectionistSort(currentArray);
    disableButtons(false);
});
document.getElementById("SleepSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await SleepSort(currentArray);
    disableButtons(false);
});
document.getElementById("BomoSort").addEventListener("click", async () => {
    disableButtons(true);
    stopRequested = true;
    currentArray = await generateArray();
    stopRequested = false;
    let copy = [...currentArray];
    await sleep(1600);
    await BomoSort(currentArray);
    disableButtons(false);
});

//Sorting Algorithms
async function bubbleSort(arr) {
    let a = [...arr];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {

            if (stopRequested) return;
            
            // Highlight comparison
            renderArray(a, j, j + 1);
            await sleep(100);

            if (a[j] > a[j + 1]) {
                // Swap
                [a[j], a[j + 1]] = [a[j + 1], a[j]];

                // Show swap
                renderArray(a, j, j + 1);
                await sleep(100);
            }
        }
    }

    // Final render
    renderArray(a);
}

async function mergeSort(arr, start = 0) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = await mergeSort(arr.slice(0, mid), start);
    const right = await mergeSort(arr.slice(mid), start + mid);

    return await merge(left, right, start);
}

async function merge(left, right, startIndex) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {

        if (stopRequested) return;

        // Highlight compared bars
        renderArray(currentArray, startIndex + i, startIndex + left.length + j);
        await sleep(80);

        if (left[i] < right[j]) {
            result.push(left[i]);
            currentArray[startIndex + result.length - 1] = left[i];
            i++;
        } else {
            result.push(right[j]);
            currentArray[startIndex + result.length - 1] = right[j];
            j++;
        }

        renderArray(currentArray);
        await sleep(80);
    }

    while (i < left.length) {
        result.push(left[i]);
        currentArray[startIndex + result.length - 1] = left[i];
        i++;
        renderArray(currentArray);
        await sleep(80);
    }

    while (j < right.length) {
        result.push(right[j]);
        currentArray[startIndex + result.length - 1] = right[j];
        j++;
        renderArray(currentArray);
        await sleep(80);
    }

    return result;
}

async function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = await partition(arr, low, high);

        await quickSort(arr, low, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, high);
    }
}

async function partition(arr, low, high) {
    let pivot = arr[high];

    let i = low - 1;

    for (let j = low; j < high; j++) {

        if (stopRequested) return;

        // Highlight pivot and current element
        renderArray(arr, j, high);
        await sleep(80);

        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];

            renderArray(arr, i, j);
            await sleep(80);
        }
    }

    // Final pivot swap
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    renderArray(arr, i + 1, high);
    await sleep(80);

    return i + 1;
}
async function YahtzeeSort(arr) {
    let sorted = [...arr].sort((a, b) => a - b);
    let locked = new Array(arr.length).fill(false);

    while (locked.includes(false)) {

        if (stopRequested) return;

        // Shuffle only unlocked positions
        shuffleUnlocked(arr, locked);

        // Lock positions that match the sorted array
        for (let i = 0; i < arr.length; i++) {
            if (!locked[i] && arr[i] === sorted[i]) {
                locked[i] = true;
            }
        }

        // Render with locked positions highlighted
        renderArray(currentArray, locked, sorted);
        await sleep(120);
    }

    renderArray(arr);
}
function shuffleUnlocked(arr, locked) {
    for (let i = arr.length - 1; i > 0; i--) {
        if (locked[i]) continue;

        let j = Math.floor(Math.random() * (i + 1));

        if (locked[j]) continue;

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
function manualSort(from, to) {
    generateArray();
    if (!manualMode) return;

    // Move the element
    const value = currentArray[from];
    currentArray.splice(from, 1);
    currentArray.splice(to, 0, value);

    renderArray(currentArray);

    // Check if sorted
    if (isSorted(currentArray)) {
        manualMode = false;
    }
}
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
async function insertionSort(arr) {
    for (let i = -1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];

                // Render with locked positions highlighted
                renderArray(currentArray, i, j);
                await sleep(120);

            } else {
                break;
            }
        }
    }
}
async function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            renderArray(currentArray, i, j);
            await sleep(120);
        }
    }
}
async function bogoSort(arr) {
    while (!isSorted(currentArray)) {

        if (stopRequested) return;

        // Shuffle the array
        for (let i = currentArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [currentArray[i], currentArray[j]] = [currentArray[j], currentArray[i]];
        }

        // Render the shuffled array
        renderArray(currentArray);
        await sleep(120);
    }

    // Final render when sorted
    renderArray(currentArray);
}
async function SixSevenSort(arr) {

}
async function radixSort(arr) {

}
async function schrodingerSort(arr) {

}
async function ragequitSort(arr) {

}
async function procrastinationSort(arr) {

}
async function cocktailSort(arr) {

}
async function binarySort(arr) {

}
async function linearSort(arr) {

}
async function cuckooSort(arr) {

}
async function lotterySort(arr) {

}
async function boomerSort(arr) {
    let a = [...arr];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {

            if (stopRequested) return;
            
            // Highlight comparison
            renderArray(a, j, j + 1);
            await sleep(100);

            if (a[j] > a[j + 1]) {
                // Swap
                [a[j], a[j + 1]] = [a[j + 1], a[j]];

                // Show swap
                renderArray(a, j, j + 1);
                await sleep(100);
            }
        }
    }

    // Final render
    renderArray(a);
}
/*

                <button id="bubbleSort" class="uwmenubuttons" class="menu-button">Bubble Sort</button>
                <button id="mergeSort" class="uwmenubuttons" class="menu-button">Merge Sort</button>
                <button id="quickSort" class="uwmenubuttons" class="menu-button">Quick Sort</button>
                <button id="yahtzeeSort" class="uwmenubuttons" class="menu-button">Yahtzee Sort</button>
                <button id="manualSort" class="uwmenubuttons" class="menu-button">Manual Sort</button>
                <button id="insertionSort" class="uwmenubuttons" class="menu-button">Insertion Sort</button>
                <button id="selectionSort" class="uwmenubuttons" class="menu-button">Selection Sort</button>
                <button id="bogoSort" class="uwmenubuttons" class="menu-button">Bogo Sort</button>
                <button id="SixSevenSort" class="uwmenubuttons" class="menu-button">6/7 Sort</button>
                <button id="radixSort" class="uwmenubuttons" class="menu-button">Radix Sort</button>
                <button id="schrodingerSort" class="uwmenubuttons" class="menu-button">Schrodinger Sort</button>
                <button id="ragequitSort" class="uwmenubuttons" class="menu-button">Rage Quit Sort</button>
                <button id="procrastinationSort" class="uwmenubuttons" class="menu-button">Procrastination Sort</button>
                <button id="manualSort" class="uwmenubuttons" class="menu-button">Manual Sort</button>
                <button id="cocktailSort" class="uwmenubuttons" class="menu-button">Cocktail Sort</button>
                <button id="binarySort" class="uwmenubuttons" class="menu-button">Binary Sort</button>
                <button id="linearSort" class="uwmenubuttons" class="menu-button">Linear Sort</button>
                <button id="cuckooSort" class="uwmenubuttons" class="menu-button">Cuckoo Sort</button>
                <button id="lotterySort" class="uwmenubuttons" class="menu-button">Lottery Sort</button>
                <button id="boomerSort" class="uwmenubuttons" class="menu-button">Boomer Sort</button>
                <button id="tinderSort" class="uwmenubuttons" class="menu-button">Tinder Sort</button>
                <button id="miracleSort" class="uwmenubuttons" class="menu-button">Miracle Sort</button>
                <button id="Unsort" class="uwmenubuttons" class="menu-button">Unsort</button>
                <button id="No Sort" class="uwmenubuttons" class="menu-button">No Sort</button>
                <button id="TrumpSort" class="uwmenubuttons" class="menu-button">Trump Sort</button>
                <button id="GambleSort" class="uwmenubuttons" class="menu-button">Gamble Sort</button>
                <button id="ADHDSort" class="uwmenubuttons" class="menu-button">ADHD Sort</button>
                <button id="VibeSort" class="uwmenubuttons" class="menu-button">Vibe Sort</button>
                <button id="AnxietySort" class="uwmenubuttons" class="menu-button">Anxiety Sort</button>
                <button id="DogeSort" class="uwmenubuttons" class="menu-button">Doge Sort</button>
                <button id="AiSort" class="uwmenubuttons" class="menu-button">AI Sort</button>
                <button id="VampireSort" class="uwmenubuttons" class="menu-button">Vampire Sort</button>
                <button id="SoulsLikeSort" class="uwmenubuttons" class="menu-button">Souls Like Sort</button>
                <button id="DJDropSort" class="uwmenubuttons" class="menu-button">DJ Drop Sort</button>
                <button id="SpeedrunSort" class="uwmenubuttons" class="menu-button">Speedrun Sort</button>
                <button id="MinesweeperSort" class="uwmenubuttons" class="menu-button">Minesweeper Sort</button>
                <button id="MagnetSort" class="uwmenubuttons" class="menu-button">Magnet Sort</button>
                <button id="PancakeSort" class="uwmenubuttons" class="menu-button">Pancake Sort</button>
                <button id="CraneSort" class="uwmenubuttons" class="menu-button">Crane Sort</button>
                <button id="Black Hole Sort" class="uwmenubuttons" class="menu-button">Black Hole Sort</button>
                <button id="Mother-In-LawSort" class="uwmenubuttons" class="menu-button">Mother-In-Law Sort</button>
                <button id="DiscordModSort" class="uwmenubuttons" class="menu-button">Discord Mod Sort</button>
                <button id="999ms Ping Sort" class="uwmenubuttons" class="menu-button">Selection Sort</button>
                <button id="Vip Sort" class="uwmenubuttons" class="menu-button">Vip Sort</button>
                <button id="Interrogation Sort" class="uwmenubuttons" class="menu-button">Interrogation Sort</button>
                <button id="DrunkSort" class="uwmenubuttons" class="menu-button">Drunk Sort</button>
                <button id="YoutubeSort" class="uwmenubuttons" class="menu-button">Youtube Sort</button>
                <button id="AmericanSort" class="uwmenubuttons" class="menu-button">American Sort</button>
                <button id="WindowsSort" class="uwmenubuttons" class="menu-button">Windows Sort</button>
                <button id="debtSort" class="uwmenubuttons" class="menu-button">Debt Sort</button>
                <button id="TsarSort" class="uwmenubuttons" class="menu-button">Tsar Sort</button>
                <button id="InflationSort" class="uwmenubuttons" class="menu-button">Inflation Sort</button>
                <button id="EA Sort" class="uwmenubuttons" class="menu-button">EA Sort</button>
                <button id="CapitalismSort" class="uwmenubuttons" class="menu-button">Capitalism Sort</button>
                <button id="StalinSort" class="uwmenubuttons" class="menu-button">Stalin Sort</button>
                <button id="GaslightSort" class="uwmenubuttons" class="menu-button">Gaslight Sort</button>
                <button id="NintendoSort" class="uwmenubuttons" class="menu-button">Nintendo Sort</button>
                <button id="UbisoftSort" class="uwmenubuttons" class="menu-button">Ubisoft Sort</button>
                <button id="PerfectionistSort" class="uwmenubuttons" class="menu-button">Perfectionist Sort</button>
                <button id="SleepSort" class="uwmenubuttons" class="menu-button">Sleep Sort</button>
                <button id="BomoSort" class="uwmenubuttons" class="menu-button">Bomo Sort</button>

*/