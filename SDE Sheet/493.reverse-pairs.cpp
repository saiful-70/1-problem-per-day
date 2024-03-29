/*
 * @lc app=leetcode id=493 lang=cpp
 *
 * [493] Reverse Pairs
 */

// @lc code=start
class Solution {
public:
    int reversePairs(vector<int>& nums) {
        vector<int> arr(nums);
        long long int n = arr.size();
        long long int cnt = 0;
        for(long long int i=0;i<n;i++) {
            for(long long int j=i+1;j<n;j++) {
                unsigned long long int comp = 2*arr[j];
                if(arr[i]>comp) {
                    cnt++;
                }
            }
        }
        return cnt;
    }
};

