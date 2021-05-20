/**
 * 给定一个 n×n 的二维矩阵matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * @param matrix
 */
function rotate(matrix) {
  const { length } = matrix;
  let e = 0;
  if (length > 1) {
    while (e < length) {
      const temp = [];
      for (let i = 0; i < length; i++) {
        temp.push(matrix[i][e]);
      }
      matrix.push(temp.reverse());
      e += 1;
    }
    matrix.splice(0, length);
  }
  console.log(matrix);
}

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
