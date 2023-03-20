function treeInsert(root, node) {
    if (root === null) {
      root = node;
    } else if (node.key < root.key) {
      root.left = treeInsert(root.left, node);
    } else {
      root.right = treeInsert(root.right, node);
    }
    return root;
  }
  
  function measureHeight(root, height) {
    if (root === null) {
      return height;
    }
    return Math.max(
      measureHeight(root.left, height + 1),
      measureHeight(root.right, height + 1)
    );
  }
  
  export function collectData() {
    const m = 7; // Number of measurements
    const data = [];
  
    for (let n = 1000; n <= 20000; n += 1000) {
      let sumHeightN = 0;
  
      for (let j = 0; j < m; j++) {
        let root = null;
  
        for (let i = 0; i < n; i++) {
          const key = Math.floor(Math.random() * 10001);
          const node = { key, left: null, right: null };
          root = treeInsert(root, node);
        }
  
        const height = measureHeight(root, 0);
        sumHeightN += height;
  
        root = null; // Free memory
      }
  
      const avgHeight = sumHeightN / m;
      data.push({ n, height: avgHeight });
    }
  
    return data;
  }
  