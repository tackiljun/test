////////////////////////////////////////////////////////////////////////////////////
// Spiral Matrix / 나선형 매트릭스.

////////////////////////////////////////////////////////////////////////////////////
// - 2D Array / 2차원 배열 순회 문제.
// - m X n 사이즈의 (m : rows, n : columns) 매트릭스의 엘레멘트를 나선형 모양으로 순회.
////////////////////////////////////////////
// 예) input : [[1,2,3], [4,5,6], [7,8,9]]
// 예) output : [1, 2, 3, 6, 9, 8, 7, 4, 5]

////////////////////////////////////////////////////////////////////////////////////
// L = left, R = right, T = top, B = bottom.
// L = 0 
// R = m[0].length - 1
// T = 0
// B = m.length - 1

// left <= rigth and top <= bottom
// while {
//     1. Topleft -> R
//     2. TopRight -> B
//     3. BottomRight -> L
//     4. BottomLeft -> T
// }

////////////////////////////////////////////////////////////////////////////////////
// 문제 접근 방법.
// 1. 4곳의 코너 포인터를 각각 변수에 저장 & 초기화.
//////////////////////////////////////////////////
// 2. TopLeft 코너에서 시작, 
//     첫번째 row 왼쪽 -> 오른쪽으로 순회.
//     순회가 끝나면 Top 포인터 +1 증가.
//////////////////////////////////////////////////
// 3. RightTop 코너에서 시작, 
//     맨우측 위 -> 아래로 순회.
//     순회 끝나면 Right포인터 -1 감소.
//////////////////////////////////////////////////
// 4. RightBottom 코너에서 시작, 
//     맨우측 오른쪽 -> 왼쪽으로 순회.
//     순회 후  Bottom포인터 -1 감소.
//////////////////////////////////////////////////
// 5. Left포인터에서 시작, 
//     왼쪽 -> 오른쪽으로 순회.
//     Left포인터 +1 증가.