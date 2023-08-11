function solution(S) {
    const N = S.length;
    const M = S[0].length;
    const charPositions = new Map();
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            const char = S[i][j];
            if (!charPositions.has(char)) {
                charPositions.set(char, []);
            }
            charPositions.get(char).push({ index: i, position: j
});
        }
    }
    for (const positions of charPositions.values()) {
        if (positions.length > 1) {
            const [first, second] = positions;
            return [first.index, second.index, first.position];
        }
    }
    return [];
}


console.log(solution(["abc", "bca", "dbe"]));
console.log(solution(["zzzz", "ferz", "zdsr", "fgtd"]));
console.log(solution(["gr", "sd", "rg"]));
console.log(solution(["bdafg", "ceagi"]));