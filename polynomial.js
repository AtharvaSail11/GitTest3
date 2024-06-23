//solve 3(x-1)(x-2) and find its roots
function findRoots(polynomial) {
    // Regular expression to extract factors of the form (x-a)
    const factorRegex = /\(x-([^)]+)\)/g;
    let match;
    const roots = [];
  
    // Find all matches of the regular expression
    while ((match = factorRegex.exec(polynomial)) !== null) {
      // Convert the matched value to a number and negate it to find the root
      roots.push(parseFloat(match[1]));
    }
  
    return roots;
  }
  
  // Polynomial string
  const polynomial = "3(4x-1)(x-2)";
  
  // Find the roots
  const roots = findRoots(polynomial);
  
  console.log("The roots of the polynomial are:", roots);