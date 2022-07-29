/*
 * @lc app=leetcode id=53 lang=cpp
 *
 * [53] Maximum Subarray
 */

// @lc code=start
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int n = nums.size();
        int mx = nums[0];
        int sum = 0;
        // O(n^3) solution: 
        // for(int i=0;i<n;i++) {
        //     for(int j=i;j<n;j++) {
        //         sum = 0;
        //         for(int k=i; k<=j; k++) {
        //             sum+=nums[k];
        //         }
        //         if(sum>=max) {
        //             max = sum;
        //         } else {
        //             max = max;
        //         }
        //     }
        // }

        // linear solution:
        for(auto it : nums) {
            sum+=it;
            mx = max(sum, mx);
            if(sum<0) sum=0;
        }
        return mx;
    }
};
// @lc code=end

