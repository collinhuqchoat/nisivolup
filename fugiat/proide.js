function treemapBinary(parent, x0, y0, x1, y1) {
    // Base case: Stop recursion if there are no children to layout
    if (!parent.children || !parent.children.length) return;

    // Sort children based on size or another metric if needed
    parent.children.sort((a, b) => b.value - a.value);

    // Calculate total value of all children
    let total = parent.children.reduce((acc, child) => acc + child.value, 0);

    // Binary treemap layout algorithm
    let mid = binarySplit(parent.children, total, x0, y0, x1, y1);

    // Recursively apply treemapBinary to each half
    treemapBinary(parent.children[0], x0, y0, mid.x, mid.y);
    treemapBinary(parent.children[1], mid.x, y0, x1, mid.y);
}

// Helper function to perform the binary split
function binarySplit(children, total, x0, y0, x1, y1) {
    // Binary split based on cumulative values
    let acc = 0;
    let mid = { x: x0, y: y0 };
    let target = total / 2;

    // Iterate through children to find the midpoint
    for (let i = 0; i < children.length; i++) {
        if (acc > target) break;
        let child = children[i];
        let remaining = target - acc;

        if (child.value < remaining) {
            acc += child.value;
            mid.x = x0;
            mid.y = y0;
        } else {
            let ratio = remaining / child.value;
            mid.x = x0 + (x1 - x0) * ratio;
            mid.y = y0 + (y1 - y0) * ratio;
            break;
        }
    }
    return mid;
}
