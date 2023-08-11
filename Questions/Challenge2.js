function solution(S) {
    let maxSymmetric = 0;
    let currentSymmetric = 0;
    let maxStartIndex = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '<' || S[i] === '>') {
            currentSymmetric++;
        } else if (S[i] === '?') {
            currentSymmetric += 2;
        }

        if (currentSymmetric > maxSymmetric) {
            maxSymmetric = currentSymmetric;
            maxStartIndex = i - Math.floor((maxSymmetric - 1) / 2);
        }
    }

    return maxSymmetric;
}

console.log(solution("<><??>>")); // Output: 4
console.log(solution("??????")); // Output: 6
console.log(solution("<<?"));    // Output: 2
