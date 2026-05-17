let bug: { id: number; title: string; severity: string; assignee: string } = {
    id: 101,
    title: "Login button unresponsive on mobile",
    severity: "Critical",
    assignee: "Dev"
};

function formatBug(b: { id: number; title: string; severity: string; assignee: string }): string {
    return "BUG-" + b.id + " [" + b.severity + "] " + b.title + " (Assigned: " + b.assignee + ")";
}

console.log(formatBug(bug));



function countPassedTests(results: string[]): number {
    let count: number = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "PASS") count++;
    }
    return count;
}

function printTestSummary(total: number, passed: number): void {
    console.log("Passed: " + passed + "/" + total);
    console.log("Failed: " + (total - passed) + "/" + total);
}

let results: string[] = ["PASS", "FAIL", "PASS", "PASS", "FAIL"];
let passed: number = countPassedTests(results);
printTestSummary(results.length, passed)