// problem link
// https://www.codingninjas.com/codestudio/problems/count-inversions_615

// solve in future

#include <bits/stdc++.h> 

long long  merge_sort(int left, int mid, int right,  vector<int> &v)
{
	int l = left, r =  mid+1, cnt = 0;
	vector<int> temp_v;
	for(int i=l; l<=mid && r<=right; i++) {
		if(v[r]<v[l]) {
			temp_v.push_back(v[r++]);
		} else {
			temp_v.push_back(v[l++]);
      cnt+=(mid-i);
		}
	}
	while(l<=mid) {
		temp_v.push_back(v[l++]);
	}
	while(r<=right) {
		temp_v.push_back(v[r++]);
	}	
	for(int i = left, j=0; i<=right; i++,j++) {
		v[i] = temp_v[j];
	}	
	temp_v.clear();
}

long long  divide(int left, int right, vector<int>&v)
{
	if(left>=right) {
		return;
	}
	int mid = (left+right)/2;
	divide(left, mid, v);
	divide(mid+1, right, v);
	merge_sort(left, mid, right, v);
}

long long getInversions(long long *arr, int n){
  long long cnt = 0;
  // int size = sizeof(arr)/sizeof(long long);
    for(int i=0;i<n;i++) {
      for(int j=i+1; j<n; j++) {
        if(arr[i]>arr[j]) cnt++;
      }
    }
    return cnt;
}