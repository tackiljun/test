////////////////////////////////////////////////////////////////////////
// # 최대 수익 계산하기.
// -> n기간 동안의 주식가격 변화를 기준으로 낼수 있는 가장 큰 수익 계산하기.

////////////////////////////////////////////////////////////////////////
// # 문제 설명.
// -> 주어진 기간동안 주식 매매를 하여 얻는 이익을 계산.
//     예) 기간 중 가장 쌀 때 주식을 구입, 가장 비쌀 때 주식을 판매.
//     예) 3일동안의 주식 가격이 [100, 50, 250]이라면 , 최대이익은 200.
//     예) 3일동안의 주식 가격이 [100, 50, 20]이라면 , 최대이익은 0.

////////////////////////////////////////////////////////////////////////
// # 문제 풀이 접근 방법.
/////////////////////////////////////////////////////////////
// - input = [100, 200, 50, 30, 150, 250]
/////////////////////////////////////////////////////////////
// - 두가지 변수 초기화.
//     a. maxProfit = 0 (기본값 0으로 시작).
//     b. minBuyPrice = input[0] (가장 저렴한 구입 가격).
/////////////////////////////////////////////////////////////
// - input 배열에 반복문 실행.
//     a. 매회의 반복마다 조건문 걸기
//         (현재까지 가장 저렴한 구입가격과 현재의 가격을 비교).
//     b. 두가지 결정.
//         1. 현재의 가격이 minBuyPrice 보다 클때.
//             -> 수익발생, maxProfit 변수값 업데이트.
//         2. 현재의 가격이 minBuyPrice 보다 작을때.
//             -> 수익발생X, minBuyPrice 변수값 업데이트.
/////////////////////////////////////////////////////////////
// - 반복문 종료 후, maxProfit 값 리턴.