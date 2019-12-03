
const minWindow = function(s, t) {
    // initialize variables
    let charCount = t.length;
    let minLength = Number.MAX_VALUE;
    let minStartIndex = 0;
    const char = {};

    // create a map of the characters of T
    for (let i = 0; i < t.length; i++) {
        const curr = t[i];
        char[curr] = (char[curr] || 0) + 1;
    }

    // this sets conditional for 1st pointer
    for (let l = 0, r = 0; r < s.length; ) {
        // first pointer
        // char[s[r]] is the number of characters left for character at 1st pointer
        if (char[s[r]] > 0) charCount--;
        char[s[r]]--;
        r++;

        // this sets conditional for 2nd pointer
        while (charCount === 0) {
            // check if current window is less than the minimum length
            if ((r - l) < minLength) {
                minLength = r - l;
                minStartIndex = l;
            }

            // second pointer
            char[s[l]]++;
            if (char[s[l]] > 0) charCount++;
            l++;
        }
    }

    // return empty string if no valid candidate
    // otherwise return smallest substring
    return minLength === Number.MAX_VALUE
        ? ''
        : s.substr(minStartIndex, minLength);
};
