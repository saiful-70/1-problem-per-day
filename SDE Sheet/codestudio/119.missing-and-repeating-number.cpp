// problem link
// https://www.codingninjas.com/codestudio/problems/873366?topList=striver-sde-sheet-problems

#include <bits/stdc++.h> 
// using namespace std;

pair<int,int> missingAndRepeating(vector<int> &arr, int n)
{
	// Write your code here 
	pair<int, int> res;
  vector<int> v(n+1);
  for(int i=0;i<arr.size();i++) {
    v[arr[i]]++;
  }
  for(int i=1;i<=n;i++) {
    if(v[i] == 2) res.second = i;
    if(v[i] == 0) res.first = i;
  }
  return res;
}

// int main()
// {
//   int t;
//   cin>> t;
//   while(t--) {
//     int n, x;
//     vector<int> arr;
//     cin >> n;
//     for(int i=0;i<n;i++) {
//       cin >> x;
//       v.push_back(x);
//     }
//     missingAndRepeating(arr, n);
//   }
// }