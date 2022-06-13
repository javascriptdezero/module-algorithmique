function Heap(k, A) {
  if (k === 1) {
    console.log(A);
  } else {
    // On génère les permutations fixant A[k-1]
    Heap(k - 1, A);

    // On génère les permutations échangeant A[k-1] avec les autres termes.
    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        let temporaire = A[k-1];
        A[k-1] = A[i];
        A[i] = temporaire;
      } else {
        [A[0], A[k-1]] = [A[k-1], A[0]];
      }
      Heap(k - 1, A);
    }
  }
}

A = [1,2,3];
Heap(A.length, A);