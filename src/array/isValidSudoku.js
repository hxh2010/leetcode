/**
 * 请你判断一个9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 * 数字1-9在每一行只能出现一次。
 * 数字1-9在每一列只能出现一次。
 * 数字1-9在每一个以粗实线分隔的3x3宫内只能出现一次。（请参考示例图）
 * 数独部分空格内已填入了数字，空白格用'.'表示。=
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = (board) => {
  // 步骤 1：初始化横、纵以及小九宫格
  const rows = [[], [], [], [], [], [], [], [], []];
  const columns = [[], [], [], [], [], [], [], [], []];
  const boxes = [[], [], [], [], [], [], [], [], []];

  // 步骤 2：遍历填充值
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // 获取值
      const value = board[i][j].toString();

      // 先判断非 . 元素
      if (value !== '.') {
        // 检验横排
        if (!rows[i].includes(value)) {
          rows[i].push(value);
        } else {
          return false;
        }

        // 检验竖排
        if (!columns[j].includes(value)) {
          columns[j].push(value);
        } else {
          return false;
        }

        // 检查盒子
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 对应的盒子
        if (!boxes[boxIndex].includes(value)) {
          boxes[boxIndex].push(value);
        } else {
          return false;
        }
      }
    }
  }

  // 步骤 3：如果没有问题，就是真的，返回 true
  return true;
};

console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ]),
);
